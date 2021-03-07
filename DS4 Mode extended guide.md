# DS4 MODE SETTTINGS GUIDE

!!! important "TL;DR:"
    You **NEED** to use [Ryochan7's DS4Windows](https://github.com/Ryochan7/DS4Windows) along this mode to present the controller as a Xinput device or an actual Dualshock 4, otherwise it won't be detected by most games.

**DualShock 4** mode. In this mode, the driver emulates a DualShock 4 with an artificial Vendor & Product ID supported by [DS4Windows](https://github.com/Ryochan7/DS4Windows/). 

### VERIFYING AND CHANGING CURRENT DS3 MODE ON DSHIDMINI'S CONTROL PANEL
 
1. Locate the DsHidMini Control Panel (**DSHMC.exe**) that came with the downloaded DsHidMini driver achieve, then run it **as an administrator**;
2. With the controller connected, check on "HID device mode" selection if its mode is "DS4 (DS4Windows)". If it's not, change to it and click on "apply settings". Reconnect the controller if it was disconnected on Bluetooth;
3. After making sure the controller is on the correct "HID device mode", close the DsHidMini Control Panel.

### USING THE CONTROLLER WITH DS4WINDOWS

1. Download the latest DS4Windows release package from here [https://github.com/Ryochan7/DS4Windows/releases] according to your Windows' version (x86 for 32bits, x64 for 64bits);
2. Extract the package to an easily accessible folder;
3. Run DS4Windows.exe;
4. Install the ViGEm BUS Driver if asked to.

After that, the controller should be properly recognized by DS4Windows. If it is not, go back to the previous section on how to verify/change the current DS3 mode.

### WHAT DOES (NOT) WORK

+ XInput / DualShock 4 emulation configured under the profile settings.
+ DS3 controllers are always recognized as if they were connected by USB. As such, DS4Windows bluetooth functions like auto-disconnect on idle and disconnect on button combo are not supported. This is a limitation on DsHidMini side and can't be fixed by DS4Windows.
+ Motion/UDP server is not supported and will remain so until someone manages to translate the motion info from the DS3 to the DS4 motion standard.
+ Rumble works as normal.
+ DS3's LEDs can be controlled by setting the correct Lightbar colors (more on that on a later section).
+ DS3 touchpad not supported for obvious reasons. To use the touchpad click when emulating a Dualshock 4 it needs to be set up as a macro (as for the day this guide was written, march 07 of 2021, DS4Windows does not support this function).
+ Basically every other DS4Windows function works as intended.

### LIGHTBAR COLOR -> LED CONVERSION

By default, DsHidMini sets the LEDs on the DS3 to show the current battery level (4 = full -> 1 = low). When setting the correct lightbar color values with DS4Windows it is possible to control the LEDs on the DS3, which can be useful to represent the current selected profile or alternative ways on showing the battery level by using macros or the built-in battery level indicator.
Beware that functions in DS4windows that make the lightbar flash, pulse or randomize the colors (rainbow mode) are not supported and will make the LEDs won't behave as expected. Because of this, the function "Flash Lightbar at High Latency" does not work as intended when a DS3.

!!! Unsupported color values will revert the LED control to the default battery charge indication of DsHidMini

#### SIMPLE LED CONTROL

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



#### COMPLETE LED CONTROL

+ Harder" to set-up (not really).
+ Allows any combination of LEDs on.
+ Useful if the user wants to differentiatie between more than 4 profiles

To activate this form of lightbar color translation, both the values of the Green and Blue colors must be set as "255". After that, the Red color value from 0 to 15 will be translated to the LEDs state according to the following table, where the value of "0" on the LEDs comumns means that the LED is OFF and "1" means "ON":

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


### SOLVING DOBLE INPUT ISSUE ON GAMES

SECTION IN CONSTRUCTION

### 
