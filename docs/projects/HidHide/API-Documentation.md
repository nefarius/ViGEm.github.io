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

### Preparation

First, since .NET doesn't really offer any convenience methods to deal with double-null-terminated wide-character-string literals I've thrown together this simple helper class:

<script src="https://gist.github.com/nefarius/59ee8d8bccd1f97039fc2ed9b61f0aa9.js"></script>

Dealing with the application list requires translating the native executable file path to the DOS device path the driver works with. This is a tricky task as it involves quite a few native API calls and logic taking NTFS mount points (junctions) into account. Feel free to utilise yet another helper class:

<script src="https://gist.github.com/nefarius/639b582dd8149b0ca63c4f7ca68a9761.js"></script>

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

### Retrieve, alter and submit deny-list

<script src="https://gist.github.com/nefarius/880845646d177c74e94880f0568909d1.js"></script>

### Retrieve, alter and submit allow-list

<script src="https://gist.github.com/nefarius/85c737da316ca5b68169a29f6e71d770.js"></script>
