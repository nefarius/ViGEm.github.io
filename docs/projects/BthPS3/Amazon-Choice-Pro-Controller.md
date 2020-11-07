# Amazon's Choice "Pro Controller" Compatibility

!!! danger highlight "This Controller can't be connected to Windows Bluetooth"
    This controller doesn't obey the Bluetooth specification regarding channel encryption and can therefore not be connected to Windows. Details below. It has been tested with the legacy ScpToolkit and BthPS3.

## About

This is a 3rd party aftermarket controller modeled after the original Sony DualShock 3 compatible with the PlayStation 3.

Alternative names:

- Diswoe Wireless Controller

## Product page 

[Molyhood Wireless Controller for PS3, Wireless Controller, Double Shock Gaming Controller, 6-Axis Bluetooth Gamepad Joystick with Charging Cable for PS3 Controller for Playstation 3](https://www.amazon.de/dp/B07MCGVKHD/ref=cm_sw_em_r_mt_dp_kfYOFbKHBJ5CE?_encoding=UTF8&psc=1)

## Product pictures

![Controller](/images/61qdiSaiePL._AC_SX679_.jpg)

![Controller](/images/71dnU4cCpnL._AC_SX679_.jpg)

![Controller](/images/20201104_225115.jpg)

## Wireshark

A packet capture exposes the channel open response sent by the Windows Bluetooth stack as set to `Result: Refused - security block (0x0003)`:

![Wireshark](/images/fHOkn7s9Be.png)

## Event Viewer

This type of connection error is logged in the Windows Event Log in the System log, reported by `BTHUSB` as `Windows rejected a device connection because the device didn't establish encryption prior to the service level connection.`:

![Eventviewer](/images/AnyDesk_1st9aPmQro.png)
