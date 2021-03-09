# How to Install

DsHidMini can only work its magic if it's the dominant driver for your controller, you may have others preinstalled that need removal, this guide covers most of the known cases.

## Installation

No matter what software you may have preinstalled, this step is always the same 😀

- [Go to the latest release on GitHub](https://github.com/ViGEm/DsHidMini/releases/latest)
- Download the attached `dshidmini_vX.X.X.X.zip` archive to an arbitrary location on your machine
- Extract the archive (doesn't matter where to, e.g. your Downloads folder)
- [Make sure you know your architecture](https://vigem.org/research/How-to-check-architecture/)
    - On x64 navigate to `x64\dshidmini`
    - On x86 navigate to `x86\dshidmini`
- Right-click on `dshidmini.inf` and select Install
    ![hIh7PcxkC9.png](images/hIh7PcxkC9.png)
    - Should only take a moment until success dialog
    ![InfDefaultInstall_La1TsZO9P0.png](images/InfDefaultInstall_La1TsZO9P0.png)
- Run `DSHMC.exe` to see if the controller gets detected
    - Run it as Administrator to change settings, [check the documentation for details](../HID-Device-Modes-Explained)

By now if you plug in your controller (or reboot the machine) chances are high that everything already works as expected. If it doesn't, worry not, read on! 👇

## Addressing conflicts

We need to first determine if any other conflicting device driver is present on the system and remove it so DsHidMini can take over that job. The steps outlined here may or may not be applicable to your system, it entirely depends on your past 😜 and the stuff you potentially installed. Worry not though, together we shall succeed ✨

