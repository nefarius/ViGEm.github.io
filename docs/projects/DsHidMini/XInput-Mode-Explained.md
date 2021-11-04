# XInput Mode Explained

## About

DsHidMini ships with "XInput Mode" by default, this article explains what that actually means and what to expect when using DsHidMini with modern games instead of emulators. Thoroughly make yourself familiar with this topic, as it avoids confusion and false bug reports about issues that are not within the powers of the driver to change.

!!! tip "Click on images to enlarge"
    You can click/tap on each image and it will open in full resolution and become easier to read ❤️

!!! note "Why is this required, shouldn't it just be plug and play?!"
    DsHidMini was never intended for use with modern games to begin with, the main goal was to support (PlayStation) emulators first and foremost. I gave you modern game support nonetheless because that's just how awesome I am 😇 Unfortunately most modern game engines are less awesome under the hood in regards to controller handling. If they would *actually* use [XInput](https://docs.microsoft.com/en-us/windows/win32/xinput/getting-started-with-xinput) as it was intended, you'd be in the clear and wouldn't read these lines. Most engines are enumerating [DirectInput and XInput](https://docs.microsoft.com/en-us/windows/win32/xinput/xinput-and-directinput) together in a more or less (mostly less) successful way. This can lead to detection and layout issues with DsHidMini. Worry not though, read on to help yourself play your favorite game nonetheless ✨

## Troubleshooting suggestions

### Double-check you're running in the correct Mode

This may seem obvious but is amongst the most common errors. In `DSHMC` triple-check **on wired and wireless** that you're actually in XInput Mode as seen below. If you recently changed it and it appears like nothing happened **unplug/disconnect and reconnect the controller** for the settings to become active!

![DsHidMini Config](images/GUdcSj3o3M.png){: .glightbox }

### Verify Mode in Device Manager

Fire up Device Manager, change the `View` to `Devices by connection` to make discovery easier and drill down into the node `Nefarius HID Devices`. Here you need to find your controller(s) and an additional `XINPUT compatible HID device` like so:

![Device Manager - Default view](images/q55cLJbaB4.png){: .glightbox }

![Device Manager - View by connections](images/CBfdxUmYSe.png){: .glightbox }

This is essential, if you don't see the highlighted device, the mode will not work. Check the installation guide again, you might have missed a step 👀

### Check controller functionality with test tools

#### Check controller in `joy.cpl`

Press the key combination ++win+r++ and enter `joy.cpl` to bring up the integrated Joystick test and open your device (name might differ on your end, it doesn't matter):

![joy.cpl](images/rundll32_xSUcO4ebpV.png){: .glightbox }

Verify that the **layout** displayed here matches the one you see:

![joy.cpl - Controller](images/rundll32_VsrsALUZe6.png){: .glightbox }

If it differs, you're in the wrong mode or something else is haunted 👻

#### Check controller in `SCPUser.exe`

You can download SCPUser [from here](https://github.com/nefarius/ScpToolkit/raw/master/SCPUser.exe). It's a very basic and simple XInput detection and test tool. Your controller(s) should show up like so:

![SCPUser XInput Test Tool](images/SCPUser_K8QFXdrmxG.png){: .glightbox }

#### Check controller in Web Browser

You can also verify the controllers functionality via the [Gamepad Tester Website](https://gamepad-tester.com/). You may need to wiggle with the controls a bit before it shows up like so:

![Gamepad Tester Website](images/msedge_gPmS1GWPZi.png){: .glightbox }

## Setting up Steam

This mode will work best with games launched through Steam after you configured controller support like outlined here. Open your Steam Settings:

![Steam Menu](images/hWkon6jHKj.png){: .glightbox }

Go to `Controller` / `GENERAL CONTROLLER SETTINGS`:

![Steam Settings](images/M2TBRIqhL6.png){: .glightbox }

Enable *at least* Xbox Configuration Support **and** Generic Gamepad Configuration Support:

![Steam Controller Settings](images/VoUdb3Xjqk.png){: .glightbox }

Now after you connected your controller, it should get detected by Steam as an Xbox One Controller like shown below:

![Steam Controller detection popup](images/mpTzbVnP6k.png){: .glightbox }

### Configure your Steam Games

Now go into your games `Properties...`:

![Road Redemption Example](images/NKd9rKdLq0.png){: .glightbox }

In the upcoming dialog go to `CONTROLLER` and set the override to `Enable Steam Input`:

![Per-Game Controller Settings](images/7wCVPUB6dL.png){: .glightbox }

Once the game is launched, you should see the gamepad being detected in the overlay:

![In-Game Controller Popup](images/Hocb8Ctq2Z.png){: .glightbox }

Here's an example of the controller working like an Xbox Controller in a game with no native support for the DualShock 3 (Road Redemption):

![Road Redemption Menu Demo](images/J1LeaKZos2.gif){: .glightbox }

!!! note "Don't expect Sony button overlays"
    This should be fairly self-explanatory but we repeat it here nonetheless: since the game "sees" only an Xbox One Controller (variant), it will show you the Xbox button layout when navigating, this is expected and can not be altered.
