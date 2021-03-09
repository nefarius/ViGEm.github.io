# DS4 Mode User Guide

!!! important "TL;DR:"
    The Beta Build of Ryochan7's DS4Windows is required until DS3 support goes live on the stable build.

In "DS4 (DS4Windows)" HID Device Mode, the driver emulates a DualShock 4 with an artificial Vendor & Product ID supported by [Ryochan7's DS4Windows](https://github.com/Ryochan7/DS4Windows), allowing the user to emulate a DS4 or XInput controller as well as using most of its functions.

## What does work

- XInput / DualShock 4 emulation according to the selected profile settings in DS4Windows.
- Rumble works as normal.
- DS3's LEDs can be controlled by setting the correct Lightbar colors (more on that on a later section).
- Basically every other DS4Windows function that is not related to the lightbar or motion works as intended.

## What does not work

- DS3 controllers are always recognized as if they were connected by USB. As such, DS4Windows bluetooth functions like auto-disconnect on idle and disconnect on button combo are not supported. This is a limitation on DsHidMini side and can't be fixed by DS4Windows. The buil-in equivalent functions of DsHidMini should be used instead. 
- Motion/UDP server is not supported and will remain so until someone manages to translate the motion info from the DS3 to the DS4 motion standard.
- Settings that make the lightbar color flash, pulse or change randomly (rainbow mode) are not supported.
- DS3 touchpad not supported for obvious reasons. To use the touchpad click when emulating a Dualshock 4 it needs to be set up as a macro (as for the day this guide was written, march 07, 2021, DS4Windows does not support this function).

## Verifying/Changing current DS3 HID Device Mode

Go [here](../HID-Device-Modes-Explained) on how to do so. The DS3 needs to be in "DS4 (DS4Windows)" mode to be detected by DS4Windows.

## Using the controller with DS4Windows

1. Download the latest DS4Windows release package from [here](https://github.com/Ryochan7/DS4Windows/releases) according to your Windows' version (x86 for 32bits, x64 for 64bits);
2. Extract the package to an easily accessible folder;
3. Download the latest Beta Build from [here](https://github.com/mika-n/DS4Windows/raw/debugVerWPF/extras/DS4WindowsWPF_DeviceDetectDebug.zip);
4. Extract the Beta Build Archive inside the DS4Windows that was extracted in step 2;
5. If everything is alright your DS4Windows folder should look like this:  
![ds4windows beta](images/ds4windows_beta_folder.png)  
6. Run DS4WindowsDebug.exe (make sure no other instance of DS4Windows.exe is running before this;
7. Install the ViGEm BUS Driver if asked to.

After that controller should be properly recognized by DS4Windows. If it is not, go back to the previous section on how to verify/change the current DS3 mode.

From here, DS4Windows can be used as usual. XInput and DS4 emulation, as well other functions, can then be set-up in the profiles settings according to the user needs. Enjoy!

## Lightbar color -> LEDs translation

By default, DsHidMini sets the LEDs on the DS3 to show the current battery level (4 = full -> 1 = low). When setting the correct lightbar color values with DS4Windows it is possible to control the LEDs on the DS3, which can be useful to represent the current selected profile or alternative ways on showing the battery level by using macros or the built-in battery level indicator.
Beware that functions in DS4windows that make the lightbar flash, pulse or randomize the colors (rainbow mode) are not supported and will make the LEDs won't behave as expected. Because of this, the function "Flash Lightbar at High Latency" does not work as intended when a DS3.

!!! Unsupported color values won't change the LEDs any further until a new supported color value is set.

### Simple LED control

- Only 1 LED can be ON at a time
- Simple to set-up;
- Necessary for some macros and to let DS4Windows take hold of showing the controllers battery level;

To activate this form of lightbar color translation, both the values of the Green and Blue colors must be set as "0". After that, the Red color value will be translated to the LEDs state according to the following table:

| RED value (Dec) |  RED value (Hex) | LED state |
| :---: | :---: | :---: |
| 0-63 | 00-3F | LED 1 ON |
| 64-127 | 40-7F | LED 2 ON |
| 128-191 | 80-BF | LED 3 ON |
| 192-255 | C0-FF | LED 4 ON |

e.g. 1: Setting up a profile to be represented as LED 3.

![SimpleLedControl eg 1 - LED 3 on](images/SimpleLedControl_eg1_LED3on.png)

e.g. 2: Setting up a macro to make the LEDs reflect the controller's battery level.

![SimpleLedControl eg 2 - Macro example](images/SimpleLedControl_eg2_Macro.png)

e.g. 3: Setting up DS4Windows to control the LEDs in order to show the controller's battery level all the time.

![SimpleLedControl eg 3 - Battery charge indication](images/SimpleLedControl_eg3_Battery.png)

### Complete LED control

- "Harder" to set-up (not really).
- Allows any combination of LEDs on.
- Useful if the user wants to differentiate between more than 4 profiles

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

![TotalLedControl eg - LEDs 4 and 2](/projects/DsHidMini/images/TotalLedControl_eg_LEDs_4_2.png)

## Solving double input issues on games

Some games can end-up detecting two controllers/inputs when using DS3 with DS4Windows. This happens because the game is picking both the real controller input and the emulated Xbox/DualShock 4 controller created by DS4Windows. As of the moment of writing (March 07, 2021) there are 2 ways on attempting to solve this issue:

### Hiding the real controller by using "Hide DS4 controller" in DS4Windows

On the settings tab of DS4Windows there is a option named "Hide DS4 controller". When checked, DS4Windows will attempt on getting exclusive access to the controller, preventing games/other applications of receiving inputs from the real controller, essentially solving the issue.
Unfortunately, there are many factors that may cause DS4Windows to fail in getting exclusive access. More information on this and on how to solve it can be found [here](https://github.com/Ryochan7/DS4Windows/wiki/Exclusive-Mode-(Hide-DS4-Controller-config-option)-tips-and-issues).

![Hide DS4 Controller](images/Hide_DS4_Controller.png)

### Hiding the real controller by using HidGuardian

!!! important "Read carefully"
    If HidGuardian is incorrectly set-up/uninstalled, the user may lose access to all its connected HID devices, including keyboard and mouse (albeit it can be reversed)!

HidGuardian is a driver created to act as a barrier between every HID device and Windows, thus allowing the user to hide specific devices and only allow chosen applications to reach them. Because of this, it needs to be correctly set-up and carefully used to avoid complications (like the user temporarily losing access to their own keyboard and mouse).

#### Correctly uninstalling HidGuardian (in case things go wrong)

The installer tool that will be used to install HidGuardian is also capable of correctly uninstalling it if the user chooses, just open it and hit "Uninstall", then reboot the computer.

![unninstall hidguardian](images/unninstall_hidguardian.png)

In case things go wrong (and they shouldn't as long as the user carefully follows the steps described in this section) or the uninstaller fails here are 2 guides on how to solve the issue:

- [If the uninstaller fails](../HidGuardian/Taming-HidGuardian-Gen1/)
- [If the user loses access to keyboard and mouse](https://github.com/x360ce/x360ce/wiki/HID-Guardian)

#### Installing HidGuardian

1. Download and extract the archive from [https://drive.google.com/file/d/1PNL3uv_4KektN00S9fm61djypSQ-3HED/view?usp=sharing] (link from Ryochan7's DS4Windows wiki)
2. Inside the extracted folder, run HidGuardianInstaller.exe
3. Click on Install. Wait until the utility finishes downloading then installing HidGuardian  
![install hidguardian success](images/Installing_HidGuardian_Success.png)
4. After the "HidGuardian is now installed" appears on the utility, close it and then reboot the computer

#### Hiding the controller

1. Connect the DS3 controller
2. Open DS4Windows
3. On the Settings Tab, open HidNinja  
![DS4Windows HidNinja](images/DS4Windows_HidNinja.png)  
4. On the top-left list, select the PLAYSTATION(R)3 Controller;
5. Select on the right list the key named "HID\VID_7331&UP:0001_U:0005", then click on the "add" button on the top-right corner;
6. Check if the "HID\VID_7331&UP:0001_U:0005" key is now present on the bottom list  
![HidNinja DS3](images/HidNinja_DS3.png)  
7. Close HidNinja
8. Disconnect then reconnect the controller
9. Check if the controller is recognized by DS4Windows and if the "Key" icon is active, showing that exclusive access is active
10. End  
![DS4Windows DS3 Exclusive access](images/DS4Windows_DS3_exclusive_access.png)
