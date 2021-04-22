# API Documentation

!!! important "Topic intended for developers"
    This topic is intended for **developers** who'd like to build upon the capabilities of BthPS3 and directly talk to devices for prototyping or other experimental tasks.

Devices connected through BthPS3 can be interfaced with "driverless" by opening a handle and directly communicating with the HID Control and Interrupt channels. They can be enumerated via [SetupAPI](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/setupapi) by using the [Device Interface GUIDs documented in the project sources](https://github.com/ViGEm/BthPS3/blob/e28e815fe50d91aeb5af692cff29946647d0fa24/common/include/BthPS3.h#L189-L211). Reading from and writing to the L2CAP channels is done via [DeviceIoControl](https://docs.microsoft.com/en-us/windows/win32/api/ioapiset/nf-ioapiset-deviceiocontrol) utilizing [these IOCTL commands](https://github.com/ViGEm/BthPS3/blob/e28e815fe50d91aeb5af692cff29946647d0fa24/common/include/BthPS3.h#L357-L375).

## Example implementation

[Check out this archived project](https://github.com/ViGEm/Shibari/tree/master/Sources/Shibari.Sub.Source.BthPS3) for a reference implementation on how to enumerate and interact with devices exposed by BthPS3 (C#/.NET).
