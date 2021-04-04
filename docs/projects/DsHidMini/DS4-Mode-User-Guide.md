!!! important "Fear not!"
    The guide has lots of images, a optional _Light Bar to LEDs translation_ section and a FAQ, so the actual setup part is not as long as it looks. Still, read and follow carefully.

# DS4 Mode User Guide

In "DS4 (DS4Windows)" HID Device Mode, the controller appears as a custom device that can be detected by [Ryochan7's DS4Windows](https://github.com/Ryochan7/DS4Windows), allowing the user to then emulate a DS4 or XInput controller as well as make use of most of its features.

## What does work

- Xbox 360 (__XInput__) / DualShock 4 emulation according to the selected profile settings in DS4Windows
- Rumble works as normal
- DS4's Touchpad Button can be used by remapping a button to it (e.g.: use Select as the _TP button_ instead of _Share_)
- DS3's LEDs can be controlled by setting the correct Light Bar colors (more on that on a later section)
- Basically every other DS4Windows function that is not related to the Light Bar or motion works as intended

## What does not work

- DS3 controllers are always recognized as if they were connected by USB. As such, DS4Windows Bluetooth functions like auto-disconnect on idle and disconnect on button combo are not supported. This is a limitation on DsHidMini side and can't be fixed by DS4Windows. [The built-in equivalent functions of DsHidMini](https://github.com/ViGEm/DsHidMini#features) should be used instead
- Motion/UDP server is not supported and will remain so until someone manages to translate the motion info from the DS3 to the DS4 motion standard
- Settings that make the Light Bar color flash, pulse or change randomly (rainbow mode) are not supported
- Specific DS4 touchpad movements are not supported, only the Touchpad Button and to use it another button needs to be remapped

## Verifying/Changing current DS3 HID Device Mode

Go [here](../HID-Device-Modes-Explained) on how to do so. The DS3 needs to be in "DS4 (DS4Windows)" mode to be detected by DS4Windows.

## Using the controller with DS4Windows

- Download the latest DS4Windows release package from [here](https://github.com/Ryochan7/DS4Windows/releases) according to your [Windows 10 version](https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/)
- Extract the package to an easily accessible folder
- Run DS4Windows.exe
- Install the ViGEmBus Driver if asked to

After that, the controller should be properly recognized by DS4Windows. If it is not, go back to the previous section on how to verify/change the current DS3 mode.

### Changing between XInput and DS4 emulation

The controller that DS4Windows emulates is dependent on the current selected profile. By default, the profile that comes with DS4Windows called... _Default_... is set to emulate a Xbox 360 controller. To change to DS4 emulation:

- Go to the _Profiles_ tab
- Click on the "New" button to create a new profile
- When asked if a preset is to be used, choose "yes" then "Gamepad"
- On the right side go the _Other_ tab
- In the final option of the _Other_ tab, "Emulated Controller", change from _Xbox 360_ to _DualShock 4_
- On the left side, click on the Light Bar inside the image of the DualShock 4 which will open the _Color Picker Window_, as shown in the picture below. For now, pick any color as long as "G" or "B" are __not__ 0 or 255 (read the _Light Bar color to LEDs translation_ section later to know why)
- Give a name to your profile (e.g.: DS3 to DS4)
- Save the profile
- Back in the _Controllers_ tab, click on the _Selected profile_ box and change from default to the profile you just created

![Ds4Profile](images/Ds4Profile.png){: .glightbox }

And done, now you can switch between XInput/DS4 emulation by changing between profiles. Profiles can also be switched by button combinations by setting a _Special action_ inside each profile settings, though we will not cover this in this guide.

## What now?

From here, DS4Windows can be used _mostly_ as usual. XInput and DS4 emulation, as well other functions, can then be set-up in the profiles settings according to the user needs. Besides that:

- __It is highly recommended that the next section, _Solving double input issues on games_, is followed through to prevent issues__
- _At least_ the start of the _Light Bar color to LEDs translation_ should be read to prevent undesired LED behavior
- It's recommended you have a quick look at the _FAQ_ section, read at least the title of the topics


### Simple LED control

- Only 1 LED can be ON at a time
- Simple to set-up
- Necessary for some macros and to let DS4Windows take hold of showing the controllers battery level

To activate this form of lightbar color translation, both the values of the Green and Blue colors must be set as "0". After that, the Red color value will be translated to the LEDs state according to the following table:

| RED value (Dec) |  RED value (Hex) | LED state |
| :---: | :---: | :---: |
| 0-63 | 00-3F | LED 1 ON |
| 64-127 | 40-7F | LED 2 ON |
| 128-191 | 80-BF | LED 3 ON |
| 192-255 | C0-FF | LED 4 ON |

e.g. 1: Setting up a profile to be represented as LED 3.

![SimpleLedControl eg 1 - LED 3 on](images/SimpleLedControl_eg1_LED3on.png){: .glightbox }

e.g. 2: Setting up a macro to make the LEDs reflect the controller's battery level.

![SimpleLedControl eg 2 - Macro example](images/SimpleLedControl_eg2_Macro.png){: .glightbox }

e.g. 3: Setting up DS4Windows to control the LEDs in order to show the controller's battery level all the time.

![SimpleLedControl eg 3 - Battery charge indication](images/SimpleLedControl_eg3_Battery.png){: .glightbox }

### Complete LED control

- "Harder" to set-up (not really).
- Allows any combination of LEDs on.
- Useful if the user wants to differentiate between more than 4 profiles.

To activate this form of lightbar color translation, both the values of the Green and Blue colors must be set as "255". After that, the Red color value from 0 to 15 will be translated to the LEDs state according to the following table, where the value of "0" and "1" on the LEDs columns set the corresponding LED to "OFF" and "ON", respectively:

| LED 4 |  LED 3 | LED 2 | LED 1 |  RED value (Dec) |  RED value (Hex)
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 1 | 1 |
| 0 | 0 | 1 | 0 | 2 | 2 |
| 0 | 0 | 1 | 1 | 3 | 3 |
| 0 | 1 | 0 | 0 | 4 | 4 |
| 0 | 1 | 0 | 1 | 5 | 5 |
| 0 | 1 | 1 | 0 | 6 | 6 |
| 0 | 1 | 1 | 1 | 7 | 7 |
| 1 | 0 | 0 | 0 | 8 | 8 |
| 1 | 0 | 0 | 1 | 9 | 9 |
| 1 | 0 | 1 | 0 | 10 | A |
| 1 | 0 | 1 | 1 | 11 | B |
| 1 | 1 | 0 | 0 | 12 | C |
| 1 | 1 | 0 | 1 | 13 | D |
| 1 | 1 | 1 | 0 | 14 | E |
| 1 | 1 | 1 | 1 | 15 | F |

e.g. Setting up a profile to be represented as LEDs 4 and 2.

![TotalLedControl eg - LEDs 4 and 2](images/TotalLedControl_eg_LEDs_4_2.png){: .glightbox }

## Solving double input issues on games

Some games can end-up detecting two controllers/inputs when using DS3 with DS4Windows. This happens because the game is picking both the real controller input and the emulated Xbox/DualShock 4 controller created by DS4Windows. As of the moment of writing (March 07, 2021) there are 2 ways on attempting to solve this issue:

### Correctly uninstalling HidGuardian (in case things go wrong)

The installer tool that will be used to install HidGuardian is also capable of correctly uninstalling it if the user chooses, just open it and hit "Uninstall", then reboot the computer.

![UninstallHG](images/uninstall_hidguardian.png){: .glightbox }

In case things go wrong (and they shouldn't as long as the user carefully follows the steps described in this section) or the uninstaller fails here are 2 guides on how to solve the issue:

- [If the uninstaller fails](../HidGuardian/Taming-HidGuardian-Gen1/)
- [If the user loses access to keyboard and mouse](https://github.com/x360ce/x360ce/wiki/HID-Guardian)

