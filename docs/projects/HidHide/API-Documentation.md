# API Documentation

!!! important "Topic intended for developers"
    This topic is intended for **developers** who'd like to build upon the capabilities of HidHide and alter driver configuration. As an end-user you can simply use the client UI application shipped along with the driver setup.

This article describes how an application can interact with the driver to influence which device instances get blocked and which processes get granted access. The steps outlined here are the only supported and safe way (besides the control application shipped along the driver) to interact with the driver and should be read carefully and thoroughly.

## Control Device

The filter driver uses the common concept of exposing a [Control Device](https://docs.microsoft.com/en-us/windows-hardware/drivers/wdf/using-control-device-objects) which can be opened from any user-land process and used to send [I/O Control Commands](#io-control-commands) to. No elevated privileges are required (and thus should be avoided) to access the control device.

Use the [`CreateFile`](https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-createfilea) Windows API within the language/framework of your choice and open the path `\\.\HidHide`. See examples below for .NET or good ol' C/C++:

!!! example "Obtain Control Device handle"

    === "C#"
        ```csharp
        // Use e.g. https://github.com/dotnet/pinvoke/
        // Install-Package PInvoke.Kernel32
        using (var handle = Kernel32.CreateFile("\\\\.\\HidHide",
            Kernel32.ACCESS_MASK.GenericRight.GENERIC_READ,
            Kernel32.FileShare.FILE_SHARE_READ | Kernel32.FileShare.FILE_SHARE_WRITE,
            IntPtr.Zero, Kernel32.CreationDisposition.OPEN_EXISTING,
            Kernel32.CreateFileFlags.FILE_ATTRIBUTE_NORMAL,
            Kernel32.SafeObjectHandle.Null
        ))
        {
            // call DeviceIoControl here
        }
        ```

    === "C/C++"
        ```cpp
        #include <Windows.h>

        HANDLE handle = CreateFile(
            "\\\\.\\HidHide", 
            GENERIC_READ, 
            (FILE_SHARE_READ | FILE_SHARE_WRITE | FILE_SHARE_DELETE), 
            NULL, 
            OPEN_EXISTING, 
            FILE_ATTRIBUTE_NORMAL, 
            NULL);

        // call DeviceIoControl here

        CloseHandle(handle);
        ```

For other frameworks and languages please consult the appropriate documentation.

!!! important "Exclusive handle access enforced"
    Reading and altering the lists of denied/allowed entities is not an atomic operation, therefore only one handle (process) is allowed to open the control device and issue requests at a time. Make sure to close the handle shortly after your operations are done to not block other processes which may want to talk to the driver.

## I/O Control Commands

Driver behavior is altered entirely through the [DeviceIoControl](https://docs.microsoft.com/en-us/windows/win32/api/ioapiset/nf-ioapiset-deviceiocontrol) Windows API and outlined below. Arrays of strings are exchanged as a [double-null-terminated](https://devblogs.microsoft.com/oldnewthing/20091008-00/?p=16443) [wide-character-string literal](https://docs.microsoft.com/en-us/cpp/c-language/multibyte-and-wide-characters?view=msvc-160) so make sure to apply proper conversion and specify the correct buffer lengths (include all NULL-characters and multiply times `sizeof(wchar_t)`).

### Get Blacklist

Retrieves the current blacklist/block-list/deny-list of [Device Instance IDs](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/device-instance-ids) which are currently blocked access to.

| <div style="width:140px">Parameter</div> | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_GET_BLACKLIST` |
| `lpInBuffer` | `NULL` |
| `nInBufferSize` | `0` |
| `lpOutBuffer` | Pre-allocated buffer receiving the current list of blocked (hidden) [device instance identifiers](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/device-instance-ids) as a [double-null-terminated](https://devblogs.microsoft.com/oldnewthing/20091008-00/?p=16443) [wide-character-string literal](https://docs.microsoft.com/en-us/cpp/c-language/multibyte-and-wide-characters?view=msvc-160). |
| `nOutBufferSize` | The size of the buffer in bytes. |
| `lpBytesReturned` | The required buffer size in bytes. |

### Set Blacklist

Submits a new blacklist/block-list/deny-list of [Device Instance IDs](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/device-instance-ids) which are then blocked access to.

| <div style="width:140px">Parameter</div> | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_SET_BLACKLIST` |
| `lpInBuffer` | Buffer containing the new list of blocked (hidden) [device instance identifiers](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/device-instance-ids) as a [double-null-terminated](https://devblogs.microsoft.com/oldnewthing/20091008-00/?p=16443) [wide-character-string literal](https://docs.microsoft.com/en-us/cpp/c-language/multibyte-and-wide-characters?view=msvc-160). |
| `nInBufferSize` | The size of the buffer in bytes. |
| `lpOutBuffer` | `NULL` |
| `nOutBufferSize` | `0` |

### Get Whitelist

Retrieves the current whitelist/allow-list of [absolute DOS device paths](https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-querydosdevicew) to applications which are currently allowed to see blocked devices.

| <div style="width:140px">Parameter</div> | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_GET_WHITELIST` |
| `lpInBuffer` | `NULL` |
| `nInBufferSize` | `0` |
| `lpOutBuffer` | Pre-allocated buffer receiving the current list of whitelisted (allowed) file paths to processes in [DOS device notation](https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-querydosdevicew#parameters) as a [double-null-terminated](https://devblogs.microsoft.com/oldnewthing/20091008-00/?p=16443) [wide-character-string literal](https://docs.microsoft.com/en-us/cpp/c-language/multibyte-and-wide-characters?view=msvc-160). |
| `nOutBufferSize` | The size of the buffer in bytes. |
| `lpBytesReturned` | The required buffer size in bytes. |

### Set Whitelist

Submits a new whitelist/allow-list of [absolute DOS device paths](https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-querydosdevicew) to applications which will then be allowed to see blocked devices.

| <div style="width:140px">Parameter</div> | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_SET_WHITELIST` |
| `lpInBuffer` | Buffer containing the new list of whitelisted (allowed) file paths to processes in [DOS device notation](https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-querydosdevicew#parameters) as a [double-null-terminated](https://devblogs.microsoft.com/oldnewthing/20091008-00/?p=16443) [wide-character-string literal](https://docs.microsoft.com/en-us/cpp/c-language/multibyte-and-wide-characters?view=msvc-160). |
| `nInBufferSize` | The size of the buffer in bytes. |
| `lpOutBuffer` | `NULL` |
| `nOutBufferSize` | `0` |

### Get Status

Retrieves the current global status of blocking capabilities. Returns a boolean value if the the driver is currently blocking configured devices (`true`) or on pass-through (`false`).

| <div style="width:140px">Parameter</div> | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_GET_ACTIVE` |
| `lpInBuffer` | `NULL` |
| `nInBufferSize` | `0` |
| `lpOutBuffer` | Gets the current state of the hiding capabilities (`1` = device hiding active, `0` = device hiding inactive). |
| `nOutBufferSize` | `sizeof(BOOLEAN)` (1 byte) |

### Set Status

Submits the new global status of blocking capabilities. Sets a boolean value if the the driver is currently blocking configured devices (`true`) or on pass-through (`false`).

| <div style="width:140px">Parameter</div> | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_SET_ACTIVE` |
| `lpInBuffer` | Sets the new state of the hiding capabilities (`1` = device hiding active, `0` = device hiding inactive). |
| `nInBufferSize` | `sizeof(BOOLEAN)` (1 byte) |
| `lpOutBuffer` | `NULL` |
| `nOutBufferSize` | `0` |

## Usage examples

The API usage should be fairly self-explanatory to anyone experienced with the basic Windows API, if in doubt, consult the Microsoft documentation for usage details 😉 For other high-level languages like C#/.NET wrapper libraries exist for the few required functions. A sample implementation is provided below (C#).

First, since .NET doesn't really offer any convenience methods to deal with double-null-terminated wide-character-string literals I've thrown together this simple helper class:

!!! example "String manipulation helper tools"

    === "C#"
        ```csharp
        /// <summary>
        ///     String manipulation helper methods.
        /// </summary>
        internal static class StringHelperUtil
        {
            /// <summary>
            ///     Converts an array of <see cref="string" /> into a double-null-terminated multi-byte character memory block.
            /// </summary>
            /// <param name="instances">Source array of strings.</param>
            /// <param name="length">The length of the resulting byte array.</param>
            /// <returns>The allocated memory buffer.</returns>
            public static IntPtr StringArrayToMultiSzPointer(this IEnumerable<string> instances, out int length)
            {
                // Temporary byte array
                IEnumerable<byte> multiSz = new List<byte>();

                // Convert each string into wide multi-byte and add NULL-terminator in between
                multiSz = instances.Aggregate(multiSz,
                    (current, entry) => current.Concat(Encoding.Unicode.GetBytes(entry))
                        .Concat(Encoding.Unicode.GetBytes(new[] {char.MinValue})));

                // Add another NULL-terminator to signal end of the list
                multiSz = multiSz.Concat(Encoding.Unicode.GetBytes(new[] {char.MinValue}));

                // Convert expression to array
                var multiSzArray = multiSz.ToArray();

                // Convert array to managed native buffer
                var buffer = Marshal.AllocHGlobal(multiSzArray.Length);
                Marshal.Copy(multiSzArray, 0, buffer, multiSzArray.Length);

                length = multiSzArray.Length;

                // Return usable buffer, don't forget to free!
                return buffer;
            }

            /// <summary>
            ///     Converts a double-null-terminated multi-byte character memory block into a string array.
            /// </summary>
            /// <param name="buffer">The memory buffer.</param>
            /// <param name="length">The size in bytes of the memory buffer.</param>
            /// <returns>The extracted string array.</returns>
            public static IEnumerable<string> MultiSzPointerToStringArray(this IntPtr buffer, int length)
            {
                // Temporary byte array
                var rawBuffer = new byte[length];

                // Grab data from buffer
                Marshal.Copy(buffer, rawBuffer, 0, length);

                // Trims away potential redundant NULL-characters and splits at NULL-terminator
                return Encoding.Unicode.GetString(rawBuffer).TrimEnd(char.MinValue).Split(char.MinValue);
            }
        }
        ```

With that out of the way we need the IOCTL definitions for the `DeviceIoControl` call. The values are simply computed from the helper macros which are not available in managed code:

!!! example "IOCTL code definitions"

    === "C#"
        ```csharp
        private const uint IOCTL_GET_WHITELIST = 0x80016000;
        private const uint IOCTL_SET_WHITELIST = 0x80016004;
        private const uint IOCTL_GET_BLACKLIST = 0x80016008;
        private const uint IOCTL_SET_BLACKLIST = 0x8001600C;
        private const uint IOCTL_GET_ACTIVE = 0x80016010;
        private const uint IOCTL_SET_ACTIVE = 0x80016014;
        ```

The following snippet enables the blocking capabilities and adds three device instance IDs to the deny list:

!!! example "Retrieve, alter and submit deny-list"

    === "C#"
        ```csharp
        // Use e.g. https://github.com/dotnet/pinvoke/
        // Install-Package PInvoke.Kernel32
        using (var handle = Kernel32.CreateFile("\\\\.\\HidHide",
            Kernel32.ACCESS_MASK.GenericRight.GENERIC_READ,
            Kernel32.FileShare.FILE_SHARE_READ | Kernel32.FileShare.FILE_SHARE_WRITE,
            IntPtr.Zero, Kernel32.CreationDisposition.OPEN_EXISTING,
            Kernel32.CreateFileFlags.FILE_ATTRIBUTE_NORMAL,
            Kernel32.SafeObjectHandle.Null
        ))
        {
            var buffer = Marshal.AllocHGlobal(sizeof(bool));

            // Enable blocking logic, if not enabled already
            try
            {
                Marshal.WriteByte(buffer, 1);

                // Check return value for success
                Kernel32.DeviceIoControl(
                    handle,
                    unchecked((int) IOCTL_SET_ACTIVE),
                    buffer,
                    sizeof(bool),
                    IntPtr.Zero,
                    0,
                    out _,
                    IntPtr.Zero
                );
            }
            finally
            {
                Marshal.FreeHGlobal(buffer);
            }

            // List of blocked instances
            IList<string> instances = new List<string>();

            // Get existing list of blocked instances
            // This is important to not discard entries other processes potentially made
            // Always get the current list before altering/submitting it
            try
            {
                // Get required buffer size
                // Check return value for success
                Kernel32.DeviceIoControl(
                    handle,
                    unchecked((int) IOCTL_GET_BLACKLIST),
                    IntPtr.Zero,
                    0,
                    IntPtr.Zero,
                    0,
                    out var required,
                    IntPtr.Zero
                );

                buffer = Marshal.AllocHGlobal(required);

                // Get actual buffer content
                // Check return value for success
                Kernel32.DeviceIoControl(
                    handle,
                    unchecked((int) IOCTL_GET_BLACKLIST),
                    IntPtr.Zero,
                    0,
                    buffer,
                    required,
                    out _,
                    IntPtr.Zero
                );

                // Store existing block-list in a more manageable "C#" fashion
                instances = buffer.MultiSzPointerToStringArray(required).ToList();
            }
            finally
            {
                Marshal.FreeHGlobal(buffer);
            }

            // Manipulate block-list and submit it
            try
            {
                buffer = instances
                    .Concat(new[] // Add our own instance paths to the existing list
                    {
                        // Hides wireless PlayStation 3 Controller
                        @"HID\{53f88889-1aaf-4353-a047-556b69ec6da6}&Col01\c&3945a91b&3&0000",
                        // Hides Xbox 360 Controller from XInput
                        @"USB\VID_045E&PID_028E\13FCFDC",
                        // Hides Xbox 360 Controller from DirectInput/HID-API
                        @"HID\VID_045E&PID_028E&IG_00\A&22872CBD&0&0000"
                    })
                    .Distinct() // Remove duplicates, if any
                    .StringArrayToMultiSzPointer(out var length); // Convert to usable buffer
                
                // Submit new list
                // Check return value for success
                Kernel32.DeviceIoControl(
                    handle,
                    unchecked((int) IOCTL_SET_BLACKLIST),
                    buffer,
                    length,
                    IntPtr.Zero,
                    0,
                    out _,
                    IntPtr.Zero
                );
            }
            finally
            {
                Marshal.FreeHGlobal(buffer);
            }
        }
        ```

How to handle the allow-list for applications I leave to the reader to find out 😉
