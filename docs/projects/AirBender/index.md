# About AirBender

[![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/ViGEm/AirBender) ![Discontinued](https://img.shields.io/badge/Project%20discontinued-critical)

AirBender was a [user-mode driver](https://docs.microsoft.com/en-us/windows-hardware/drivers/wdf/getting-started-with-umdf-version-2) providing a custom Bluetooth stack for USB Bluetooth dongles to support Sony PlayStation 3 Controllers on Windows. It was in development from August 2016 to February 2018 until it got archived in favour of better solutions. Its direct successor is BthPS3.

The driver is a C-port of the C# implementation used in ScpToolkit and therefore "occupies" an entire Bluetooth dongle (radio) to function, making it impossible to use with conventional Bluetooth device (headphones, mice, ...) until uninstalled.

It requires the .NET companion service [Shibari](https://github.com/ViGEm/Shibari) to detect connected controllers and have them translated into virtual Xbox 360 or DualShock 4 devices using the ViGEm Framework.

It is not advised to use AirBender due to missing support and potentially remaining issues in design and code.
