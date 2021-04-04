## Solving double input issues in DS4Windows with HidGuardian

Though this works as intended and is safe to use as long as all the steps are carefully followed, this is now obsolete since HidGuardian's successor, HidHide, was released. This article will remain here only because for the moment HidHide does not support Windows 32 bits, only HidGuardian

## Hiding the real controller by using HidGuardian

!!! important "Read carefully"
    If HidGuardian is incorrectly set-up/uninstalled, the user may lose access to all its connected HID devices, including keyboard and mouse (albeit it can be reversed)!

HidGuardian is a driver created to act as a barrier between every HID device and Windows, thus allowing the user to hide specific devices and only allow chosen applications to reach them. Because of this, it needs to be correctly set-up and carefully used to avoid complications (like the user temporarily losing access to their own keyboard and mouse).

### Correctly uninstalling HidGuardian (in case things go wrong)

The installer tool that will be used to install HidGuardian is also capable of correctly uninstalling it if the user chooses, just open it and hit "Uninstall", then reboot the computer.

![UninstallHG](/projects/DsHidMini/images/uninstall_hidguardian.png){: .glightbox }

In case things go wrong (and they shouldn't as long as the user carefully follows the steps described in this section) or the uninstaller fails here are 2 guides on how to solve the issue:

- [If the uninstaller fails](../HidGuardian/Taming-HidGuardian-Gen1/)
- [If the user loses access to keyboard and mouse](https://github.com/x360ce/x360ce/wiki/HID-Guardian)

### Installing HidGuardian

- [Download and extract the archive](https://drive.google.com/file/d/1PNL3uv_4KektN00S9fm61djypSQ-3HED/view?usp=sharing)
- Inside the extracted folder, run HidGuardianInstaller.exe
- Click on Install. Wait until the utility finishes downloading then installing HidGuardian  
![install hidguardian success](/projects/DsHidMini/images/Installing_HidGuardian_Success.png){: .glightbox }
- After the "HidGuardian is now installed" appears on the utility, close it and then reboot the computer

### Hiding the controller

- Connect the DS3 controller
- Open DS4Windows
- On the Settings Tab, open HidNinja  
![DS4Windows HidNinja](/projects/DsHidMini/images/DS4Windows_HidNinja.png){: .glightbox } 
- On the _Affected Device List_ at the bottom, click on each entry and then on the "remove" button until there's no entry left on the list
![HidNinja DS3](/projects/DsHidMini/images/HidGuardian_DS4v1.png){: .glightbox }  
- On the top-left list, select your DS3 controller
- Select on the right list the key named "HID\VID_7331&UP:0001_U:0005", then click on the "add" button on the top-right corner
- Check if the "HID\VID_7331&UP:0001_U:0005" key is now present on the bottom list  
![HidNinja DS3](/projects/DsHidMini/images/HidNinja_DS3.png){: .glightbox }  
- Close HidNinja
- Disconnect then reconnect the controller
- Check if the controller is recognized by DS4Windows and if the "Key" icon is active, showing that exclusive access is active
- End  
![DS4Windows DS3 Exclusive access](/projects/DsHidMini/images/DS4Windows_DS3_exclusive_access.png){: .glightbox }