# About WireShock

[![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/ViGEm/WireShock) ![Discontinued](https://img.shields.io/badge/Project%20discontinued-critical)

WireShock was a kernel-mode USB driver providing a custom Bluetooth stack for USB Bluetooth dongles to support Sony PlayStation 3 Controllers on Windows. It was in development from May 2018 to October 2018 until it got archived in favour of better solutions. Its direct successor is BthPS3.

The driver is a C-port of the C# implementation used in ScpToolkit and therefore "occupies" an entire Bluetooth dongle (radio) to function, making it impossible to use with conventional Bluetooth device (headphones, mice, ...) until uninstalled.

It is not advised to use WireShock due to missing support and potentially remaining issues in design and code. No stable or pre-release binaries have ever been released or signed.
