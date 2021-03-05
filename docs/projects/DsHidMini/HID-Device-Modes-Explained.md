# About the HID Device Modes

DsHidMini aims for maximum possible compatibility with existing tools or games without the need for any custom code. It supports different "HID Device emulation modes", meaning upon boot-up it can present the controller as different types of HID devices, each sporting a unique set of specialized features outlined below. The device mode you chose dictates the level of compatibility with certain 3rd party software and how the controller is "seen" by processes. Read on for details.

## How to adjust the settings

This is a per device, per connection type setting and can be adjusted in the DsHidMini Control UI tool.

## HID Device Modes

### SDF

!!! important "TL;DR:"
    Use this mode for best compatibility with the [**PCSX2 PlayStation 2 Emulator**](https://pcsx2.net/).

**Single Device** with **Force Feedback** mode. In this mode, the controller is presented as one "almost"-DirectInput-compatible HID device with **pressure sensitive** features exposed as additional sliders. The rumble motors can be controlled via **Force Feedback effects**. The advantage of this mode is a 100% compatibility with all unmodified versions of PCSX2 with the LilyPad gamepad plugin (shipped by default). The downside of this mode is, that the pressure axes exceed the limit of supported axes per device and therefore pressure sensitive axes will not be available in games using DirectInput. They will however work fine with any engine using the low level HID API instead. 

The default LED behavior in this mode is the charging animation and can't be altered.

### GPJ

!!! important "TL;DR:"
    Use this mode to experiment with older games.

**Gamepad plus Joystick** mode. In this mode, the controller is presented as **two separate HID devices**; a traditional gamepad featuring the same set of features like a common Xbox 360 controller and a Joystick, only handling the pressure axes. This mode guarantees the best potential compatibility with legacy solutions purely relying on DirectInput and works around the mentioned axis limit. **Disclaimer:** the pressure values for the **shoulder buttons** are not supported as they exceed the axis limit. This mode does not support Force Feedback and doesn't expose any path to invoke rumble or alter LED states.

The default LED behavior in this mode is the charging animation and can't be altered.

### SXS

!!! important "TL;DR:"
    Use this mode with [Steam](https://store.steampowered.com/) or the [**RPCS3 PlayStation 3 Emulator**](https://rpcs3.net/).

**SIXAXIS.SYS** mode. In this mode, the driver emulates the behavior of the official Sony `sixaxis.sys` driver shipped with the PS Now application. This is the driver default when shipped. Use this mode to ensure compatibility with [Steam](https://store.steampowered.com/), the [PS Now](https://www.playstation.com/en-us/ps-now/) application or the [**RPCS3 PlayStation 3 Emulator**](https://rpcs3.net/).

The default LED behavior in this mode is the charging animation. If a compatible application sends output reports to the device, the driver will "hand over" control to the application and stops the charging indicator until the device has been restarted.

### DS4

Work in progress...
