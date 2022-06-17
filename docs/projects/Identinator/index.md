# About Nefarius' Identinator

[![GitHub](https://img.shields.io/badge/GitHub-yellowgreen?logo=github)](https://github.com/nefarius/Identinator) ![Maintained](https://img.shields.io/badge/Project%20actively%20maintained-brightgreen)

!!! danger highlight "This is advanced software that won't hold your hand"
    The core feature of this software is intentionally powerful and alters essential components of how the Windows PnP subsystem detects devices and loads drivers for them. You can definitely screw up your system and/or devices if you don't know what you're doing. This is entirely YOUR responsibility, you have been warned.

The Identinator allows the user to alter (rewrite, masquerade) [Device ID](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/device-ids), [Hardware IDs](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/hardware-ids) and [Compatible IDs](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/compatible-ids) properties of any USB device (Bluetooth support in the works) on a Microsoft Windows system. The solution consist of a bus filter driver (`nssidswap.sys`) and .NET UI tool to configure said driver. The changes can be applied during runtime and are instantaneous (within a few milliseconds) which can be used to "on-the-fly" swap out the function driver for e.g. HID devices.

## Rewrite Example

Let's take the **Sony DualShock 4 Rev2** for example; by default it is represented by a composite device. This branches off into two child devices: the "USB Input Device" which represents the HID interface which in turn gets presented as "HID-compliant game controller" and a multimedia device (named "Wireless Controller") which in turn exposes a microphone and speaker device:

![Before](images/mmc_ME74WR3tG2.png){: .glightbox }

Examining the "USB Input Device" we can look at the default Hardware and Compatible IDs which get built by the Windows driver stack based on information extracted from the USB Device Descriptor:

![Hardware IDs](images/mmc_hzP9mpgCmB.png){: .glightbox }

![Compatible IDs](images/mmc_VaF4BO0OnD.png){: .glightbox }

After applying rewrite settings, the changes can be observed:

![Before](images/mmc_lb8TghMekj.png){: .glightbox }

!!! note "The second Wireless Controller shown..."
    ...is a Sony DualShock 4 **Rev1** that was also connected and rewritten, it is completely independent from the Rev2.

![Hardware IDs](images/mmc_JIqFmaIMoB.png){: .glightbox }

![Compatible IDs](images/mmc_9AOKamFJ91.png){: .glightbox }

Due to the compatible IDs the stock WinUSB drivers got loaded, so the device can be directly accessed with whatever software the tinkerer sees fit.
