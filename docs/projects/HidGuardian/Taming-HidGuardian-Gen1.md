# Taming HidGuardian (Gen1)

Is your Xbox/DualShock/Switch Pro/<insert gaming peripheral here> controller device not detectable by games, Steam or even the entire Windows system (`joy.cpl`)? Then you might have installed software which in turn placed a driver called [HidGuardian](https://github.com/ViGEm/HidGuardian) on your machine and left its configuration in a state which accidentally permanently hid this device from other processes. Worry not though, with a bit of command line magic outlined below you'll be back in the game in no time! :grin: 

First, [fire up PowerShell as Administrator](https://www.top-password.com/blog/5-ways-to-run-powershell-as-administrator-in-windows-10/), then proceed with the outlined steps below. Copy and paste the commands as one line unaltered, hit enter afterwards and observe the returned information.

Now, first of all let's see if HidGuardian is even present (because if not, well, hardly can be the culprit then):

!!! example "PowerShell"
    ```PowerShell
    Get-PnpDevice -FriendlyName "HidGuardian Virtual Device" -ErrorAction SilentlyContinue
    ```

This may result in no, one or more new lines like so:

![hg1.png](/assets/uploads/files/1588618224736-hg1.png)

**If** there is at least one result like shown above chances are high we're on the right track. Next, execute:

!!! example "PowerShell"
    ```PowerShell
    Get-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Class\{745a17a0-74d3-11d0-b6fe-00a0c90f57da}' -Name 'UpperFilters' -ErrorAction SilentlyContinue
    ```

![adb623e4-a38a-41d6-add4-95b1e27fadc3-image.png](/assets/uploads/files/1588618398718-adb623e4-a38a-41d6-add4-95b1e27fadc3-image.png) 

If `UpperFilters` exists and contains the string `HidGuardian`, the track has gotten red hot and we're onto something! Keep on reading!

Next we check a particular registry value:

!!! example "PowerShell"
    ```PowerShell
    Get-ChildItem 'HKLM:\SYSTEM\CurrentControlSet\Services\HidGuardian\Parameters\AffectedDevices' -ErrorAction SilentlyContinue
    ```

Chances are you might see a similar output. Now we're certain that HidGuardian is at fault hiding the controller. Oh No!

![a57312e0-3ca3-42d2-b526-4d26d54e3c09-image.png](/assets/uploads/files/1588618303458-a57312e0-3ca3-42d2-b526-4d26d54e3c09-image.png) 

Let's mitigate the situation by safely removing this value:

!!! example "PowerShell"
    ```PowerShell
    Remove-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Services\HidGuardian\Parameters' -Name 'AffectedDevices'
    ```

This command should produce no output upon execution. And you're done! Either reopen the game/tool which didn't work before, unplug and plug back in the controller in question or - to be extra thorough - reboot the computer and try again!
