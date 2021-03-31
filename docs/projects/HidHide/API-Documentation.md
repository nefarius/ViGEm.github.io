# API Documentation

!!! important "Work in progress"

## Control Device

The filter driver uses the common concept of exposing a [Control Device](https://docs.microsoft.com/en-us/windows-hardware/drivers/wdf/using-control-device-objects) which can be opened from any user-land process and used to send [I/O Control Commands](::io-control-commands) to.

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

!!! important "Exclusive handle access enforced"
    Reading and altering the lists of denied/allowed entities is not an atomic operation, therefore only one handle (process) is allowed to open the control device and issue requests at a time. Make sure to close the handle shortly after your operations are done to not block other processes which may want to talk to the driver.

## I/O Control Commands

Driver behavior is altered entirely through the [DeviceIoControl](https://docs.microsoft.com/en-us/windows/win32/api/ioapiset/nf-ioapiset-deviceiocontrol) Windows API and outlined below. Arrays of strings are exchanged as a [double-null-terminated](https://devblogs.microsoft.com/oldnewthing/20091008-00/?p=16443) [wide-character-string literal](https://docs.microsoft.com/en-us/cpp/c-language/multibyte-and-wide-characters?view=msvc-160) so make sure to apply proper conversion and specify the correct buffer lengths (include all NULL-characters and multiply times `sizeof(wchar_t)`).

### Get Blacklist

| <div style="width:140px">Parameter</div> | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_GET_BLACKLIST` |
| `lpInBuffer` | `NULL` |
| `nInBufferSize` | `0` |
| `lpOutBuffer` | Pre-allocated buffer receiving the current list of blocked (hidden) [device instance identifiers](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/device-instance-ids) as a [double-null-terminated](https://devblogs.microsoft.com/oldnewthing/20091008-00/?p=16443) [wide-character-string literal](https://docs.microsoft.com/en-us/cpp/c-language/multibyte-and-wide-characters?view=msvc-160). |
| `nOutBufferSize` | The size of the buffer in bytes. |
| `lpBytesReturned` | The required buffer size in bytes. |

### Set Blacklist

| <div style="width:140px">Parameter</div> | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_SET_BLACKLIST` |
| `lpInBuffer` | Buffer containing the new list of blocked (hidden) [device instance identifiers](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/device-instance-ids) as a [double-null-terminated](https://devblogs.microsoft.com/oldnewthing/20091008-00/?p=16443) [wide-character-string literal](https://docs.microsoft.com/en-us/cpp/c-language/multibyte-and-wide-characters?view=msvc-160). |
| `nInBufferSize` | The size of the buffer in bytes. |
| `lpOutBuffer` | `NULL` |
| `nOutBufferSize` | `0` |

### Get Whitelist

| <div style="width:140px">Parameter</div> | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_GET_WHITELIST` |
| `lpInBuffer` | `NULL` |
| `nInBufferSize` | `0` |
| `lpOutBuffer` | Pre-allocated buffer receiving the current list of whitelisted (allowed) file paths to processes in [DOS device notation](https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-querydosdevicew#parameters) as a [double-null-terminated](https://devblogs.microsoft.com/oldnewthing/20091008-00/?p=16443) [wide-character-string literal](https://docs.microsoft.com/en-us/cpp/c-language/multibyte-and-wide-characters?view=msvc-160). |
| `nOutBufferSize` | The size of the buffer in bytes. |
| `lpBytesReturned` | The required buffer size in bytes. |

### Set Whitelist

| <div style="width:140px">Parameter</div> | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_SET_WHITELIST` |
| `lpInBuffer` | Buffer containing the new list of whitelisted (allowed) file paths to processes in [DOS device notation](https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-querydosdevicew#parameters) as a [double-null-terminated](https://devblogs.microsoft.com/oldnewthing/20091008-00/?p=16443) [wide-character-string literal](https://docs.microsoft.com/en-us/cpp/c-language/multibyte-and-wide-characters?view=msvc-160). |
| `nInBufferSize` | The size of the buffer in bytes. |
| `lpOutBuffer` | `NULL` |
| `nOutBufferSize` | `0` |

### Get Status

| <div style="width:140px">Parameter</div> | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_GET_ACTIVE` |
| `lpInBuffer` | `NULL` |
| `nInBufferSize` | `0` |
| `lpOutBuffer` | Gets the current state of the hiding capabilities (`1` = device hiding active, `0` = device hiding inactive). |
| `nOutBufferSize` | `sizeof(BOOLEAN)` (1 byte) |

### Set Status

| <div style="width:140px">Parameter</div> | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_SET_ACTIVE` |
| `lpInBuffer` | Sets the new state of the hiding capabilities (`1` = device hiding active, `0` = device hiding inactive). |
| `nInBufferSize` | `sizeof(BOOLEAN)` (1 byte) |
| `lpOutBuffer` | `NULL` |
| `nOutBufferSize` | `0` |

## Usage examples

To be filled...
