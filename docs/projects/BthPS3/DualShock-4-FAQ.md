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
