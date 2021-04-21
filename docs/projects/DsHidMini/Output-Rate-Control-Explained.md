# Output Rate Control Explained

!!! note "TL;DR:"
    This feature is primarily for **Bluetooth**, it is shipped **off on USB** by default. Feel free to tinker with it though, the defaults are a recommendation that works for a majority of users, but maybe not for you! Experiment! 🥰

## Why

Certain revisions (meaning: the same model has been reworked slightly over time and put into production) of the SIXAXIS/DualShock 3 suffer from being susceptible to "packet flooding" over Bluetooth. Depending on the circumstances these controllers can start misbehaving if the host (Windows in this case) sends them packets (so called "Output Reports") too fast, which means with a time frame between packets **smaller than 150ms**. This can cause the controller to "lock up", like not responding to rumble request or LED state changes for a few seconds or sometimes even until it is power-cycled. The driver takes these flaws into consideration and applies rate control logic to all outgoing packets if these options are enabled.

## How

Adding artificial delays in between packets seems like an easy fix, but causes a clearly user-noticeable delay to rumble requests for games which trigger a series of small rumble on/off requests per second. Simply dropping packets when the driver is flagged "busy" can work too, but runs the risk of e.g. *rumble off* commands getting discarded on error which causes the controller to rumble longer than intended, or even indefinitely. The following "intelligent" mechanisms are available to mitigate the issue as transparent and clever as possible.

### Output Report Rate Control

This is the big brain one 😁 When the time period between to-be-sent output report requests (like Force Feedback Effects) drops below a user-configurable value (default value is **150ms**), the following chain of events will happen:

- Instead of being sent, the request packet will be copied to a "cache", put aside and not getting sent to the controller
- The wait-period is calculated (minimum required delay subtracted by actual calculated period)
    - E.g. if a 2nd packet comes in after 50ms with a configured minimum delay of 150ms, we need to wait for the remaining 100ms
- A timer is activated to go off after the calculated delay period
- *If* new packets arrive *during* the timer is active, the last cached packet will be replaced by the current to-be-sent-but-still-to-fast-packet
    - This prevents the *rumble off* command getting lost, which typically comes in **last** after a "packet burst"
- After the timer wait period has elapsed the **most recent cached packet** is queued to get sent again with a "high priority" flag so it won't get accidentally stuck in a timer delay loop again
- The timer is finished and reset, the cycle begins again *if* another flooding condition is detected

This may appear confusing and over-engineered at first but in our tests fixed around 99.9% of all known controller lockup issues so I'd say we did a rather fabulous job 😊

It's recommended to keep the default shipped value, which is **on**.

### Output Report Deduplication

This is a simple one. If enabled, a succeeding packet will be memory-compared to the previous one and if identical, will get **discarded**. This approach is obviously risky as "bursts" of *rumble on* commands can get thrown away by mistake so this option is only really useful for very special cases. Feel free to experiment 💖

It's recommended to keep the default shipped value, which is **off**.

## Affected Controller Models

!!! important "Work in progress"
    This is a list curated by community member efforts, if you don't see your particular model here, consider reaching out and contribute to extend the list 💖

You can check if your own controller is affected from this issue by comparing the model number you can find on the sticker on the back of your device.

### SIXAXIS Models

The original SIXAXIS has no rumble motors so the only property to control are the LEDs.

- CECHZC1U

### DualShock 3 Models

The DualShock 3 offers rumble/vibration effects via two (strong and weak) motors included in the handpiece.

- CECHZC2U
- CECHZC2E A1
