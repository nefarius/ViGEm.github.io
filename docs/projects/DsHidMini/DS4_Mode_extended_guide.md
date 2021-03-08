# DS4 MODE EXTENDED GUIDE

!!! important "TL;DR: 1"
    DsHidMini v1.0.6 has a bug that causes buttons and triggers to mix, making it impossible to correctly use the controller. This should be fixed in the next release, so keep an eye [here](https://github.com/ViGEm/DsHidMini/releases) to remain updated.

!!! important "TL;DR: 2"
    You **NEED** to use [Ryochan7's DS4Windows](https://github.com/Ryochan7/DS4Windows) for now along this mode to present the controller as a Xinput device or an actual Dualshock 4, otherwise it won't be detected by most games. Moreover, the Beta Build is required until DS3 support goes live on the stable build.


**DualShock 4** mode. In this mode, the driver emulates a DualShock 4 with an artificial Vendor & Product ID supported by [DS4Windows](https://github.com/Ryochan7/DS4Windows/). 

## VERIFYING AND CHANGING CURRENT DS3 DEVICE HID MODE TO "DS4 (DS4WINDOWS)" ON DSHIDMINI'S CONTROL PANEL
 
See [https://vigem.org/projects/DsHidMini/HID-Device-Modes-Explained/] on how to do so.

## USING THE CONTROLLER WITH DS4WINDOWS

1. Download the latest DS4Windows release package from [here](https://github.com/Ryochan7/DS4Windows/releases) according to your Windows' version (x86 for 32bits, x64 for 64bits);
2. Extract the package to an easily accessible folder;
3. Download the latest Beta Build from [here](https://github.com/mika-n/DS4Windows/raw/debugVerWPF/extras/DS4WindowsWPF_DeviceDetectDebug.zip);
4. Extract the Beta Build Archive inside the DS4Windows that was extracted in step 2;
5. If everything is alright your DS4Windows folder should look like this:

![ds4windows beta](https://user-images.githubusercontent.com/24910442/110256819-b9ce2f80-7f79-11eb-9b42-afa8207eaae9.png)


6. Run DS4WindowsDebug.exe (make sure no other instance of DS4Windows.exe is running before this;
7. Install the ViGEm BUS Driver if asked to.

After that, the controller should be properly recognized by DS4Windows. If it is not, go back to the previous section on how to verify/change the current DS3 mode.

## WHAT DOES (NOT) WORK

+ XInput / DualShock 4 emulation according to the selected profile settings.
+ DS3 controllers are always recognized as if they were connected by USB. As such, DS4Windows bluetooth functions like auto-disconnect on idle and disconnect on button combo are not supported. This is a limitation on DsHidMini side and can't be fixed by DS4Windows.
+ Motion/UDP server is not supported and will remain so until someone manages to translate the motion info from the DS3 to the DS4 motion standard.
+ Rumble works as normal.
+ DS3's LEDs can be controlled by setting the correct Lightbar colors (more on that on a later section).
+ DS3 touchpad not supported for obvious reasons. To use the touchpad click when emulating a Dualshock 4 it needs to be set up as a macro (as for the day this guide was written, march 07, 2021, DS4Windows does not support this function).
+ Basically every other DS4Windows function works as intended.

## LIGHTBAR COLOR -> LED CONVERSION

By default, DsHidMini sets the LEDs on the DS3 to show the current battery level (4 = full -> 1 = low). When setting the correct lightbar color values with DS4Windows it is possible to control the LEDs on the DS3, which can be useful to represent the current selected profile or alternative ways on showing the battery level by using macros or the built-in battery level indicator.
Beware that functions in DS4windows that make the lightbar flash, pulse or randomize the colors (rainbow mode) are not supported and will make the LEDs won't behave as expected. Because of this, the function "Flash Lightbar at High Latency" does not work as intended when a DS3.

!!! Unsupported color values will revert the LED control to the default battery charge indication of DsHidMini

### Simple LED control

+ Only 1 LED can be ON at a time
+ Simple to set-up;
+ Necessary for some macros and to let DS4Windows take hold of showing the controlers battery level;

To activate this form of lightbar color translation, both the values of the Green and Blue colors must be set as "0". After that, the Red color value will be translated to the LEDs state according to the following table:

| RED value (Dec) |  RED value (Hex) | LED state |
| :---: | :---: | :---: |
| 0-63 | 00-3F | LED 1 ON |
| 64-127 | 40-7F | LED 2 ON |
| 128-191 | 80-BF | LED 3 ON |
| 192-255 | C0-FF | LED 4 ON |

e.g. 1: Setting up a profile to be represented as LED 3.

![SimpleLedControl eg 1 - LED 3 on](https://user-images.githubusercontent.com/24910442/110249922-795dba00-7f57-11eb-9be1-1141a3d59bae.png)


e.g. 2: Setting up a macro to make the LEDs reflect the controller's battery level.

![SimpleLedControl eg 2 - Macro example](https://user-images.githubusercontent.com/24910442/110249934-88446c80-7f57-11eb-8f3e-721fc3ba2812.png)


e.g. 3: Setting up DS4Windows to control the LEDs in order to show the controller's battery level all the time.

![SimpleLedControl eg 3 - Battery chagre indication](https://user-images.githubusercontent.com/24910442/110249936-8b3f5d00-7f57-11eb-85e8-e678cd184443.png)



### Complete LED control

+ "Harder" to set-up (not really).
+ Allows any combination of LEDs on.
+ Useful if the user wants to differentiatie between more than 4 profiles

To activate this form of lightbar color translation, both the values of the Green and Blue colors must be set as "255". After that, the Red color value from 0 to 15 will be translated to the LEDs state according to the following table, where the value of "0" and "1" on the LEDs columns set the corresponding LED to "OFF" and "ON", respectively":

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

![TotalLedControl eg - LEDs 4 and 2](https://user-images.githubusercontent.com/24910442/110250406-f4c06b00-7f59-11eb-8039-bae3f8b2a1db.png)


## SOLVING DOBLE INPUT ISSUE ON GAMES

Some games can end-up detecting two controllers/inputs when using DS3 with DS4Windows. This happens because the game is picking both the real controller input and the emulated Xbox/Dualshock 4 controller created by DS4Windows. As of the moment of writing (March 07, 2021) there are 2 ways on attempting to solve this issue:

### Hiding the real controller by using "Hide DS4 controller" in DS4Windows

On the settings tab of DS4Windows there is a option named "Hide DS4 controller". When checked, DS4Windows will attempt on getting exclusive access to the controller, preventing games/other aplications of receiving inputs from the real controller, essentially solving the issue.
Unfortunaly, there are many factors that may cause DS4Windows to fail in getting exclusive access. More information on this and on how to solve it can be found [here](https://github.com/Ryochan7/DS4Windows/wiki/Exclusive-Mode-(Hide-DS4-Controller-config-option)-tips-and-issues).

![Hide DS4 Controller](https://user-images.githubusercontent.com/24910442/110252768-b5981700-7f65-11eb-972e-7a5db0e0808f.png)


### Hiding the real controller by using HidGuardian

!! **if HidGuardian is incorrectly set-up/unninstalled, the user may lose access to all its connected HID devices, including keyboard and mouse** (albeit it can be reversed)!

HidGuardian is a driver created to act as a barrier between every HID device and Windows, thus allowing the user to hide specific devices and only allow chosen applications to reach them. Because of this, it needs to be correctly set-up and carefully used to avoid complications (like the user temporarilly losing access to their own keyboard and mouse).

#### Correctly unninstalling HidGuardian (in case things go wrong)

The installer tool that will be used to install HidGuardian is also capable of correctly unninstalling it if the user chooses, just open it and hit "Unninstall", then reboot the computer.

![unninstall hidguardian](https://user-images.githubusercontent.com/24910442/110253910-74a30100-7f6b-11eb-8546-1d7ba6f8d3e7.png)


In case things go wrong (and they shouldn't as long as the user carefully follows the steps described in this section) or the unninstaller fails here are 2 guides on how to solve the issue:
+ [If the unninstaller fails](https://vigem.org/projects/HidGuardian/Taming-HidGuardian-Gen1/)
+ [If the user loses access to keyboard and mouse](https://github.com/x360ce/x360ce/wiki/HID-Guardian)

#### Installing HidGuardian

1. Download and extract the archieve from [https://drive.google.com/file/d/1PNL3uv_4KektN00S9fm61djypSQ-3HED/view?usp=sharing] (link from Ryochan7's DS4Windows wiki);
2. Inside the extracted folder, run HidGuardianInstaller.exe;
3. Click on Install. Wait until the utility finishes downloading then installing HidGuardian;
4. After the "HidGuardian is now installed" appears on the utility, close it and then reboot the computer;

#### Hiding the controller

1. Connect the DS3 controller;
2. Open DS44Windows;
3. On the Settings Tab, open HidNinja;

![DS4Windows HidNinja](https://user-images.githubusercontent.com/24910442/110254505-3529e400-7f6e-11eb-9ba1-d47260b5b8ee.png)

5. On the top-left list, select the PLAYSTATION(R)3 Controller;
6. Select on the right list the key named "HID\VID_7331&UP:0001_U:0005", then click on the "add" button on the top-right corner;
7. Check if the "HID\VID_7331&UP:0001_U:0005" key is now present on the bootm list;

![HidNinja DS3](https://user-images.githubusercontent.com/24910442/110255551-1c6ffd00-7f73-11eb-970e-c587340faf22.png)

8. Close HidNinja;
9. Disconnect then reconnect the controller;
10. Check if the controller is recognized by DS4Windows and if the "Key" icon is active, showing that exclusive access is active;
11. End.

![DS4Windows DS3 Exclusive access](https://user-images.githubusercontent.com/24910442/110255672-a6b86100-7f73-11eb-9627-938757bf4299.png)

