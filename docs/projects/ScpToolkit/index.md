# About ScpToolkit

[![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/nefarius/ScpToolkit) ![Discontinued](https://img.shields.io/badge/Project%20discontinued-critical)

ScpToolkit (successor of ["XInput Wrapper for DS3 and Play.com USB Dual DS2 Controller" a.k.a. ScpServer](https://forums.pcsx2.net/Thread-XInput-Wrapper-for-DS3-and-Play-com-USB-Dual-DS2-Controller) by [Scarlet.Crush](https://forums.pcsx2.net/User-Scarlet-Crush)) was the defacto-standard tool in the early 2010s if you wanted to use your Sony DualShock 3 wired and wireless on a Microsoft Windows PC. It consisted of multiple .NET applications which took care about swapping the stock drivers of controllers and Bluetooth dongles with [libusbK](https://sourceforge.net/projects/libusbk/) (later WinUSB) to directly take over communication. The inputs read from the controllers were then transformed and fed into [ScpVBus](https://github.com/nefarius/ScpVBus) (a WDM-based Xbox 360 Controller emulation driver) which made them available to a wide range of PC games.

SCP technically isn't a driver (although it shares many traits) but a huge C# program that closely mimicked what device drivers do.

It was in development [from July 2015 to roughly June 2017](./History.md) and got finally archived two years later in favour of focussing on successor solutions.
