# Users of HidGuardian

Over its lifespan the project has seen some adoption in the following projects. This list is most probably incomplete, please help expanding it by [contributing to it](https://github.com/ViGEm/ViGEm.github.io). The projects listed are made by 3rd party individuals, we can not provide any form of warranty or support. Appearance in no particular order.

## DS4Windows

[![Website](https://img.shields.io/badge/Website-yellowgreen?logo=html5)](https://ryochan7.github.io/ds4windows-site/) [![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/Ryochan7/DS4Windows/)

DS4Windows is a portable program that allows you to get the best experience while using a DualShock 4 on your PC. By emulating a Xbox 360 controller, many more games are accessible.

## x360ce

[![Website](https://img.shields.io/badge/Website-yellowgreen?logo=html5)](https://www.x360ce.com/) [![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/x360ce/x360ce)

"Xbox 360 Controller Emulator" allows your controller (gamepad, joystick, wheel, etc.) to function as an Xbox 360 controller. For example, it lets you play games such as "Grand Theft Auto" (GTA) or "Mafia II" using a Logitech Wheel.

## XOutput

[![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/csutorasa/XOutput)

If you have an older or not supported game controller (gamepad, wheel, joystick, etc.), but XBox 360 controllers are supported you can use this software and enjoy gaming with your controller.

XOutput is a software that can convert DirectInput into XInput. DirectInput data is read and sent to a virtual XInput (Xbox 360 Controller) device. XInput is the new standard game controller input on windows, and DirectInput can no longer be used with Universal Windows Platform software, but with this tool you can use DirectInput devices as well.

## InputMapper

[![Website](https://img.shields.io/badge/Website-yellowgreen?logo=html5)](https://inputmapper.com/)

Input Mapper is designed to bridge the gap between the devices you use and the games you play.

## HidVanguard

[![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/dixonte/HidVanguard)

A tool for configuring and automating HidGuardian.

## HIDer

[![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/samehb/HIDer)

HIDer is an open source application that allows you to manage HidGuardian in order to hide chosen controllers from being seen by games/applications (that are not whitelisted). This is useful when some games/applications have issues with specific controllers that are connected.

## JoyShockMapper

[![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/JibbSmart/JoyShockMapper)

The Sony PlayStation DualSense, DualShock 4, Nintendo Switch JoyCons (used in pairs), and Nintendo Switch Pro Controller have much in common. They have many of the features expected of modern game controllers. They also have an incredibly versatile and underutilised input that their biggest rival (Microsoft's Xbox One controller) doesn't have: a 3-axis gyroscope (from here on, “gyro”).

My goal with JoyShockMapper is to enable you to play PC games with DS, DS4, JoyCons, and Pro Controllers even better than you can on their respective consoles -- and demonstrate that more games should use these features in these ways.

## Joystick Gremlin

[![Website](https://img.shields.io/badge/Website-yellowgreen?logo=html5)](https://whitemagic.github.io/JoystickGremlin/) [![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/WhiteMagic/JoystickGremlin)

Joystick Gremlin is a program that allows the configuration of joystick like devices, similar to what CH Control Manager and Thrustmaster's T.A.R.G.E.T. do for their respectively supported joysticks. However, Joystick Gremlin works with any device be it from different manufacturers or custom devices that appear as a joystick to Windows. Joystick Gremlin uses the virtual joysticks provided by vJoy to map physical to virtual inputs and apply various other transformations such as response curves to analogue axes. In addition to customizing joysticks, Joystick Gremlin also provides powerful macro functionalities, a flexible mode system, scripting using Python, and many other features.

## BetterJoy

[![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/Davidobot/BetterJoy)

Allows the Nintendo Switch Pro Controller, Joycons and SNES controller to be used with CEMU, Citra, Dolphin, Yuzu and as generic XInput.

## ProconXInput

[![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/MTCKC/ProconXInput)

A Windows user-mode XInput driver for the Switch Pro Controller.

## Auto-Whitelister

[![Website](https://img.shields.io/badge/Website-yellowgreen?logo=html5)](https://www.autohotkey.com/boards/viewtopic.php?t=34890)

This is a solution for stopping games from seeing a DirectInput stick (Basically any stick except Xbox controllers) on your system.

For ages we have been able to create virtual controllers and remap a stick to that, but in the past we have not been able to stop the game from seeing the physical stick.

Well now we have a proper solution: The HidGuardian / HidCerberus components from ViGEm. HidGuardian is a device driver that you install which can hide sticks from the system. HidCerberus is a windows service that allows you to "whitelist" a process (eg your AHK script) so that your script is the ONLY thing on the system that can see through HidGuardian and read the stick. The stick even disappears from the joystick control panel in windows!
