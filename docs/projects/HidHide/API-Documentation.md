# API Documentation

!!! important "Work in progress"

## I/O Control Commands

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

| Parameter | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_SET_BLACKLIST` |
| `lpInBuffer` | Buffer containing the new list of blocked (hidden) [device instance identifiers](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/device-instance-ids) as a [double-null-terminated](https://devblogs.microsoft.com/oldnewthing/20091008-00/?p=16443) [wide-character-string literal](https://docs.microsoft.com/en-us/cpp/c-language/multibyte-and-wide-characters?view=msvc-160). |
| `nInBufferSize` | The size of the buffer in bytes. |
| `lpOutBuffer` | `NULL` |
| `nOutBufferSize` | `0` |

### Get Whitelist

| Parameter | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_GET_WHITELIST` |
| `lpInBuffer` | `NULL` |
| `nInBufferSize` | `0` |
| `lpOutBuffer` | Pre-allocated buffer receiving the current list of whitelisted (allowed) file paths to processes in [DOS device notation](https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-querydosdevicew#parameters) as a [double-null-terminated](https://devblogs.microsoft.com/oldnewthing/20091008-00/?p=16443) [wide-character-string literal](https://docs.microsoft.com/en-us/cpp/c-language/multibyte-and-wide-characters?view=msvc-160). |
| `nOutBufferSize` | The size of the buffer in bytes. |
| `lpBytesReturned` | The required buffer size in bytes. |

### Set Whitelist

| Parameter | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_SET_WHITELIST` |
| `lpInBuffer` | Buffer containing the new list of whitelisted (allowed) file paths to processes in [DOS device notation](https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-querydosdevicew#parameters) as a [double-null-terminated](https://devblogs.microsoft.com/oldnewthing/20091008-00/?p=16443) [wide-character-string literal](https://docs.microsoft.com/en-us/cpp/c-language/multibyte-and-wide-characters?view=msvc-160). |
| `nInBufferSize` | The size of the buffer in bytes. |
| `lpOutBuffer` | `NULL` |
| `nOutBufferSize` | `0` |

### Get Status

| Parameter | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_GET_ACTIVE` |
| `lpInBuffer` | `NULL` |
| `nInBufferSize` | `0` |
| `lpOutBuffer` | Gets the current state of the hiding capabilities (`1` = device hiding active, `0` = device hiding inactive). |
| `nOutBufferSize` | `sizeof(BOOLEAN)` (4 bytes) |

### Set Status

| Parameter | Description |
|---|---|
| `dwIoControlCode` | `IOCTL_SET_ACTIVE` |
| `lpInBuffer` | Sets the new state of the hiding capabilities (`1` = device hiding active, `0` = device hiding inactive). |
| `nInBufferSize` | `sizeof(BOOLEAN)` (4 bytes) |
| `lpOutBuffer` | `NULL` |
| `nOutBufferSize` | `0` |
