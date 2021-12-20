# About FireShock

[![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/ViGEm/FireShock) ![Discontinued](https://img.shields.io/badge/Project%20discontinued-critical)

FireShock was a [user-mode driver](https://docs.microsoft.com/en-us/windows-hardware/drivers/wdf/getting-started-with-umdf-version-2) providing an abstraction layer to support Sony PlayStation 3 Controllers on Windows. It was in development from August 2016 to December 2019 until it got archived in favour of better solutions. Its direct successor is DsHidMini.

The driver is a minimal C-port of the C# implementation used in ScpToolkit and therefore replaces the Windows stock HID class drivers with a custom implementation.

It requires the .NET companion service [Shibari](https://github.com/ViGEm/Shibari) to detect connected controllers and have them translated into virtual Xbox 360 or DualShock 4 devices using the ViGEm Framework.

It is not advised to use FireShock due to missing support and potentially remaining issues in design and code.
