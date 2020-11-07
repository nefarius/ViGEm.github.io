# Frequently Asked Questions about the DS4

## Pairing a DualShock 4 to Windows

The pairing process of the controller on Windows does not change. Press the dedicated PC mode pairing button combination and the controller becomes visible to Windows. Use the search engine of your choice to find out how to do that, it's documented quite well.

## Reconnecting an already paired DualShock 4 to Windows

Reconnecting the controller (a.k.a. powering it on via the PS button and letting it connect via Bluetooth) follows a different pattern when these drivers are present.

**Without** BthPS3 installed, the reconnecting process of the DS4 to Windows is as follows:

- Wake Up the PS4 controller with the PS button
  - Controller successfully connects to Windows after a few seconds

**With** BthPS3 installed, the reconnecting process of the DS4 to Windows requires 2 attempts:

- **1st Attempt:** Wake Up the PS4 controller with the PS Button
  - Controller's Lightbar will blink white for a few short seconds before the controller turns itself off again (_expected_)
- **2nd Attempt:** After the 1st Attempt fails, the user has 10 seconds to
  1. turn on the controller again and
  2. wait for the controller to successfully connect to Windows. If the controller does not connect in this 10s time windows, the user will have to go back to the 1st Attempt and retry

## What is different after installing BthPS3 for the reconnect process?

With BthPS3 installed there are two modes of operation:

- BthPS3's filter is enabled
  - PS3 controllers can be connected to Windows, but not the DS4 (DS4 will connect, but Windows won't recognize it as a controller and tools like DS4Windows, Steam etc. will not detect it).
- BthPS3's filter is disabled: you can connect DS4 controllers normally, but DS3s won't connect anymore.

Unless BthPS3's registry parameters have been altered from the defaults, this is what happens normally when trying to reconnect a DS4 to Windows with BthPS3 present:

- Filter is enabled. DS3 controllers can be connected at will.
- User wakes up an already paired DS4 controller that then tries to reconnect to Windows.
- DS4 connects, but doesn't work properly because the filter is enabled. The filter will consider the DS4 an unsupported device and will almost instantly drop the DS4 connection (DS4 will turn turn off the process). This is what happens on "1st Attempt" stated above.
- After the unsupported device is detected (DS4 that tried to connect) and its connection dropped, the filter will disable itself. If PS3 controllers are already connected their connection will NOT be dropped, they will stay connected normally to either Shibari or companion drivers even with the filter disabled, but the user won't be able to connect new PS3 controllers for now.
- After being disabled, the filter will re-enable itself in 10 seconds.
- Now, since the filter will enable itself after some time (10s by default) and you need it disabled to connect a DS4 controller, this means that after the 1st attempt to connect the controller "fails" the user needs to turn on again the DS4 in this 10s time window to allow it to properly reconnect to Windows before the filter is enabled again.
- So, while the filter is Disabled 👉 DS4 controller is turned on again 👉 DS4 should connect normally to Windows
- After 10s, the filter is re-enabled, allowing the user to connect PS3 controllers again. Since the DS4 is already properly connected to Windows, its connection won't be dropped and you will be able to use it normally.

## Common questions and issues

---

Section under construction 😜

---

**"My DS4 does not connect to Windows / required too many attempts for it to connect after installing BthPS3"**

 It may be that the default 10 seconds time window is too short and your DS4 is failing to be recognized again by your bluetooth dongle/card after the 1st attempt fails, so by the time the controller is recognized again in the 2nd attempt the filter has already re-enabled itself. You can increase the time before the filter is re-enabled by:
- Opening the Windows Registry.
- Going to `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\BthPS3\Parameters`
- Increasing `AutoEnableFilterDelay` to the desired time (in seconds)
 As long as you don't change anything outside of `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\BthPS3\Parameters`, this is a safe process.
 Besides changing the delay time, there is little to no benefit in changing other parameters. Also, remember that greater the time set the more the user will need to wait for the filter to be re-enabled again to be able to connect PS3 controllers.

**"On the registry, what is the "isWIRELESSSupported" and why is it “0”? Shouldn't it be "1" for my DS4 to be recognized?"**

 The DS4 controller can't connect properly when the BthPS3's filter is enabled, so `isWIRELESSSupported` needs to be `0` for the filter to properly detect the DS4 controller as an unsupported device, allowing it to then disable itself and drop the DS4 connection on the 1st reconnect attempt. If `isWIRELESSSupported` is `1`, that means your DS4 controller will connect to windows on the 1st attempt, but it won't appear as a controller and other programs (like ryochan7's DS4windows) won't recognize it. Since there is nothing using the controller in this state, BthPS3 will drop the connection after 10 seconds. 

**"So why is there this parameter anyway?"**

 When the BthPS3's filter is disabled, the controller detects that it is being connected to Windows and changes to a "PC Mode". This mode is the one that is normally recognized as a controller on Windows. 

When the filter is enabled and `isWIRELESSSupported` is `1`, the controller does not recognize that it's being connected to Windows and so it is believed that the controller remains in its native PS4 mode that may or may not expose more of the controllers fuctions by its connection. Unfortunaly, there is no program on Windows that can use the controller in this state and Windows doesn't see it as a controller. In other words, this "native PS4 connection mode" is for now (and maybe forever) completely useless for the common user and should only be of interest to developers.

**"I can pair my DS4 and reconnect it normally with BthPS3 installed by using the instructions here, but after Restarting/Shuting Down then turning on/Sleep cycling Windows I can’t reconnect my DS4 anymore and I need to un-pair then repair the controller to Windows"**

 This probably has nothing to do with BthPS3. More chances of being a problem with your Bluetooth adapter. If it is a USB dongle, try using in other ports, then re-pair the controller and test again (specially, if your dongle is a 2.0 USB one, try using it in a proper 2.0 port and not in a 3.0/3.1 one).
