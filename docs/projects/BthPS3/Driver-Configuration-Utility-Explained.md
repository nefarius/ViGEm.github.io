# Driver Configuration Utility Explained

The `BthPS3 Driver Configuration Tool` is a small self-contained .NET application shipped with the setup providing the user with a simple way to adapt the drivers operation to their liking. You can find it in your start menu, just search for it 😉

## Profile Driver Settings

These settings control the profile driver (the component which has the logic of detecting and connecting controllers in it) behavior. Depending on the companion solutions you have installed or want to install some of the following switches can or even need to be adjusted for the solution to work properly.

![Profile Driver Settings](/images/BthPS3CfgUI_heAsEzf3Rj.png){: .glightbox }

### Enable SIXAXIS™️/DualShock™️ 3 Support

!!! important "TL;DR:"
    This needs to be **on** if you want your DS3 to work wireless 😜

PS3 peripherals don't report much useful identification data like VendorID/ProductID fields or other common descriptors. Therefore the driver uses the **remote name** the device reports upon connection as an indicator to identify the type/make/model. The driver package ships with a set of well-known pre-configured names that get compared to identify a SIXAXIS-compatible device. This process is not flawless but it is reliable enough to cover the bulk of original and aftermarket devices.

If this setting is ticked, the driver attempts to compar the remote name to a well-known set of names and if successful connects it as a SIXAXIS compatible. If this setting is disabled, the detection process is skipped completely and the connection gets denied.

The following PowerShell snippet returns the currently configured names which identify a SIXAXIS-ish device:

!!! example "PowerShell"
    ```PowerShell
    Get-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\BthPS3\Parameters" -Name "SIXAXISSupportedNames" | Select-Object -ExpandProperty "SIXAXISSupportedNames"
    ```

An adventurous user can tinker with this setting and edit or add names in the registry to experiment with devices who report different and untested names. The comparison is case-sensitive, so make sure the names match a 100% (including spelling mistakes 😉).

### Enable PlayStation®️ Move Navigation Support

If ticked, the pre-configured list of remote device names will be used to attempt to identify and connect a Move Navigation compatible device. The process is skipped and the connection denied, if the setting is off.

The following PowerShell snippet returns the currently configured names which identify a Navigation-ish device:

!!! example "PowerShell"
    ```PowerShell
    Get-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\BthPS3\Parameters" -Name "NAVIGATIONSupportedNames" | Select-Object -ExpandProperty "NAVIGATIONSupportedNames"
    ```

### Enable PlayStation®️ Move Motion Support

If ticked, the pre-configured list of remote device names will be used to attempt to identify and connect a Move Motion compatible device. The process is skipped and the connection denied, if the setting is off.

The following PowerShell snippet returns the currently configured names which identify a Motion-ish device:

!!! example "PowerShell"
    ```PowerShell
    Get-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\BthPS3\Parameters" -Name "MOTIONSupportedNames" | Select-Object -ExpandProperty "MOTIONSupportedNames"
    ```

### Enable Wireless Controller (DualShock™️ 4) Support

If ticked, the pre-configured list of remote device names will be used to attempt to identify and connect a Wireless/DualShock 4 compatible device. The process is skipped and the connection denied, if the setting is off.

The following PowerShell snippet returns the currently configured names which identify a DualShock 4-ish device:

!!! example "PowerShell"
    ```PowerShell
    Get-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\BthPS3\Parameters" -Name "WIRELESSSupportedNames" | Select-Object -ExpandProperty "WIRELESSSupportedNames"
    ```

### Automatically re-enable filter after grace period has passed

The profile driver can instruct the filter driver to enable or disable its patching (re-routing) capabilities if necessary. This is particularly useful if you want to connect a DualShock 4 the "traditional" way (pair and connect it in "PC mode" which needs no special drivers) which will accidentally be picked up by the profile driver due to the way the connection logic in the DS4 is designed. It might be undesired to connect a DS4 "through" BthPS3 since it works perfectly with stock drivers, so the profile driver will drop the connection, disable the filter for a specified amount of seconds, let the DS4 connect in "vanilla" mode and re-enable the patch again to continue supporting the other PS3 peripherals.

Leaving this on is the default behavior. If you turn it off, you need to control filter behavior yourself (see [Filter Driver Settings](#filter-driver-settings)).

### Re-enable filter after...

A time span (in seconds) to wait until the filter enables itself again. If you experience issues connecting a DS4 (or Xbox One Wireless Controllers or similar via Bluetooth) try increasing this value and make sure to attempt to power on your controller a few times in order to make it work. If this mechanism still fails your, see [Filter Driver Settings](#filter-driver-settings).

### Automatically disable filter on unsupported device arrival

If the remote device identification mechanism fails (unrecognized remote name or other issues in the connection process), the profile driver can automatically instruct the filter to temporarily disabling its capabilities, basically restoring "vanilla" operation of the Bluetooth stack. BthPS3 can interfere with the connection process of other well-known wireless controller devices due to design flaws of the PS3 peripherals, this automatism is meant to aid in working around those issues. It is recommended to keep this setting active.

## Filter Driver Settings

The filter driver has one simple, powerful job: re-route HID-related traffic to the profile driver to investigate if a compatible PS3 peripherals is attempting to connect. This feature can be be altered on the fly with the settings outlined below.

![Filter Driver Settings](/images/BthPS3CfgUI_sOGOHOlymb.png){: .glightbox }

### Enable PSM patching

If on, the filter re-routes the "paths" necessary to connect a PS3 peripheral to the profile driver, which then can work its magic to further present the controller to the system. If off, the entire Bluetooth stack behaves as if BthPS3 wasn't there, which can help when experiencing troubles connecting other well-known Bluetooth gaming devices, in turn disables PS3 peripherals support entirely though. Can't have everything in life 😀

If you want to use e.g. a DS3, DS4 and Xbox One controller at the same time simply follow this:

- Leave the filter on
- Connect the DS3 and wait a few seconds until it is online
- Turn the filter off
- Now connect the DS4 and Xbox Wireless devices
- Either leave the filter off and enable it later or enable it immediately again
- Enjoy the game 🥳

## Danger Zone

!!! important "It's called Danger Zone for a reason 😜"
    Depending on some companion solutions (like Shibari or DsHidMini) you may need to alter some of these settings. Read carefully though, some might cause system instability if configured incorrectly. You have been warned 👮

The Danger Zone hosts some of the more advanced settings of the solution. You're welcome to tinker with them as long as you can live with the consequences 😜 Some companion solutions (like Shibari or DsHidMini) even require a specific combination of settings as explained below.

![Danger Zone](/images/BthPS3CfgUI_xTFIBvuuAI.png){: .glightbox }

### Expose PDO as RAW device to user-land

| Companion | Required state |
|---|---|
| Shibari | On |
| DsHidMini | Off |

If this setting is on, the resulting child devices (PDO, Physical Device Object) of the profile driver can be brought up "driverless" and will be accessible for communication by any non-driver user-land application (like Shibari). Its HID Control/Interrupt channels can directly be consumed by the Windows API in any high-level language (see [API-Documentation](../API-Documentation)). This mode is great for prototyping and experimenting with the devices without the need to write any (kernel- or user-mode) driver code.

### Hide PDO from Device Manager

When enabled, the connected controller devices will be hidden in Device Manager. They can still be examined by enabling `View / Show hidden devices`. This setting has no effect on any other operational logic and is there only for cosmetics.

### Restrict PDO access to elevated users

If enabled, devices in RAW mode can only be enumerated and accessed from elevated processes (applications started as Administrator, System services). This might be useful if some companion solutions have to run as an elevated process anyway for whatever reason. The default is off which allows any user to enumerate the devices.

### Exclusive PDO access enforced

When in RAW mode, many processes can enumerate and open the devices at the same time. For game controllers presented through BthPS3 this behavior is undesired, since by design one driver/process needs authority of the exchanged packets, otherwise input information will be split across many processes resulting in unpredictable and lost button/axis change events and conflicting LED state events from different sources.

It is recommended to leave this setting enabled unless a specific solution requires multiple open handles to the device.

### PDO S0 Idle Timeout

Once PS3 peripherals have received their "magic start packet" they will continue sending input state changes to the host radio until disconnected (turned off) again. This process allocates buffer memory which needs to be consumed by either a function driver or user-land process. If both of these companion solutions are absent, this setting kicks in and drops the connection after the set amount of time has passed where no I/O traffic has happened.

It is usually not required to increase (or decrease) this value, leaving it at the default is recommended.
