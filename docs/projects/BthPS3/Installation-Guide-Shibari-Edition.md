# Installation Guide (Shibari Edition)

!!! attention "Kinda-SCP-Successor for Windows 10"
    The following instructions are currently the best way to get your beloved PS3 peripherals to work, it still is quite the clutter but should get you into the game until DsHidMini is ready for the public :innocent:

## What's this

Ever wanted to use those pesky outdated yet absolutely lovely game controller devices shipped with your PlayStation(R) 3 on the Windows platform without constantly tripping over wires in your living room and risking becoming a victim of gravity? :thinking_face: Well fear no more, you've come to the right place, mate! We got just the piece of magnificent software you need and all it will cost you is a few minutes of your precious time! :tada:

Coming to you from the Austrian University of Awesome (AUA :school:), BthPS3 has surfaced as the result of [research and development](https://forums.vigem.org/topic/242/bluetooth-filter-driver-for-ds3-compatibility-research-notes/) by one crazed fella; [Dr. Nefarius](https://github.com/nefarius)! :eyes: Known for his expertise of building software nobody knows how to even install or, for that matter, getting rid of! :astonished:

Sounds exciting? Want to join the herd and risk getting your PC turned into something even greater than before? Well, what are you even waiting for, keep on reading, spirited traveler! :point_down:

## Uh, what do you need from me

Simple! Just **latest Windows 10** and any Bluetooth USB device or integrated card (like those you commonly find in portable computers, a.k.a. Laptops) running stock (a.k.a vanilla) drivers! No [SCP](https://github.com/nefarius/ScpToolkit), no [AirBender](https://github.com/ViGEm/AirBender), just the defaults :smiley: (well, not quite, but keep on reading 'till the bottom of the page! :eyes: )

[![802ebf28-a2a8-4c78-902d-1370a3d01b25-image.png](/assets/uploads/files/802ebf28-a2a8-4c78-902d-1370a3d01b25-image.png)](/assets/uploads/files/802ebf28-a2a8-4c78-902d-1370a3d01b25-image.png){: .glightbox }

## Sweet, give me! How to install

!!! info "Download Setup for Windows 10"
    [Latest BthPS3 Bluetooth Drivers](https://github.com/ViGEm/BthPS3/releases/latest)

:point_up: Grab and run the setup, it will tell you everything you need to know, just click through it :grin:

:exclamation: **Now is the time to plug in your Bluetooth dongle, if you haven't already** :exclamation:

:point_right: If you have an **integrated card** - like on laptops - **make sure it is turned ON before you continue!** :+1:

If you don't, setup will be very sad :panda_face: and will abort mission.

So play along and ensure it's happy, will ya :grinning:

## Alright, that was scary, what to do next?

Fear not, we're almost at the finish line! Now comes the part that's a bit rough but together we shall succeed!

### Get all the files

Download and store all the fun listed here somewhere on your battle station :metal:

- Get the latest `Shibari.zip` [from here](https://buildbot.vigem.org/builds/Shibari/master/) (always pick the highest version number from the bottom for most recent release)
  - This plays the "middle man" between all those drivers you'll install
- Get the latest `FireShock.zip` [from here](https://downloads.vigem.org/projects/FireShock/stable/)
  - This is required for USB connection and automatic pairing
- Get the latest `ViGEm Bus Driver` [from here](https://github.com/ViGEm/ViGEmBus/releases/latest)
  - This is required for presenting the devices as either Xbox 360 or DualShock 4 controllers to games

### Install drivers

- Extract the `FireShock` archive somewhere and simply execute the `dpinst` (or `dpinst64`) tool included which will install the USB driver
- Run the `ViGEm Bus Driver` setup and simply click through it until finished

### Ready for some action

You made it this far? Great! Remember that `Shibari` archive from earlier? Extract that somewhere and have a look into the resulting folder. Simply fire up `Shibari.Dom.Server.exe` in there and your connected DS3 should spawn a virtual Xbox 360 and DualShock 4 controller which your games can pick up. **Keep `Shibari` running for everything to work properly!** Check the following F.A.Q. to see how to make it run permanently. Enjoy!

[![a86fcc5f-bfd5-4c29-9b47-633d7ffbdc72-image.png](/assets/uploads/files/a86fcc5f-bfd5-4c29-9b47-633d7ffbdc72-image.png)](/assets/uploads/files/a86fcc5f-bfd5-4c29-9b47-633d7ffbdc72-image.png){: .glightbox }

## F.A.Q.

### Have you gone insane?

Maybe! When you stare into the kernel for too long, the kernel stares back :ghost: 

### Is this some official Sony thing?

Well, obviously not, as clearly stated literally everywhere! It's a research project I started for fun and pushed towards becoming production-ready and thought it might be of use to my fellow gamers!

### Does this thing phone home? I see some network traffic once a day...

~~I ship a self-updater with my drivers since pushing security/stability critical enhancements is vital for drivers. The updater checks [updates.vigem.org](https://updates.vigem.org) once a day and remains silent if you're sporting the most recent version. There's a scheduled task called `BthPS3Updater` you can disable/delete by hand if this makes you nervous.~~

Not a thing anymore since v1.3.x of BthPS3.

### Why don't you cover Windows versions lower than 10?

Production-signing is unfortunately fairly annoying and unnecessary complicated for drivers targeting multiple major revisions of Windows so to keep my sanity I went for Windows 10 only. The code of BthPS3 is - as we speak - technically compatible from Windows 7 to 10 so it could be back-ported in the future with little efforts.

### Why is this Shibari thingy necessary to run this clutter?

I have plans for getting completely rid of this requirement, but that requires additional drivers which I've started working on but currently don't have the drive or capacity to deal with. Maybe if support and interest from the community rises above a certain threshold I'll tackle that topic some day again!

### How do I get pressure sensitive buttons in PCSX2 with this?

That is possible but out of the scope of this project.

### Can I use the motion capabilities of the PS3 controllers?

That is possible but out of the scope of this project.

### I want some battery charge indicator, like SCP!

That is possible but out of the scope of this project.

### Can I have all SCP features like quick disconnect combo etc.?

That is possible but out of the scope of this project.

### I sometimes need to power on the controller twice or more until it stays connected...

That's due to how certain connection details get stored within the Microsoft Bluetooth DDIs and when the driver attaches, there's no way around that other than just powering the controller on again!

### The setup version doesn't match the driver version it installs...

That's intentional; not every tweak and fix the setup itself receives necessarily requires an update of the driver binaries. So all fine there!

### I want a DualShock 4 emulated, not an Xbox 360 controller!

Open `settings.json` in your Shibari folder and check out the comments in the `"sinks"` section :wink:

### Ever since I've installed this, my DS3 isn't working anymore in PSNow!

`FireShock` and Sonys official `sixaxis` driver they ship with PSNow unfortunately can't coexist on the same system, if you want "traditional" USB support back you need to uninstall `FireShock`:

[![7f5092c2-15e8-4dd8-bdb1-5a300607db15-image.png](/assets/uploads/files/7f5092c2-15e8-4dd8-bdb1-5a300607db15-image.png)](/assets/uploads/files/7f5092c2-15e8-4dd8-bdb1-5a300607db15-image.png){: .glightbox }

### Ever since I've installed this, my DS4 isn't connecting anymore at all!

This is a bit tricky at the moment; I've added a workaround to combat this where you *should* be able to use it like before without any troubles if you simply power it on, let it shut off after one or two seconds and then within a time span of ten seconds power it on again and it should work.

### How can I keep Shibari running in the background?

`Shibari` can easily be installed as a Windows Service running in the background without the need to start it every time you'd like to use your devices and have an additional Window open all the time.

[Fire up PowerShell as Administrator](https://www.top-password.com/blog/5-ways-to-run-powershell-as-administrator-in-windows-10/) and run the `Shibari.Dom.Server.exe` file with `install` as an argument, like so:

[![bca87e6e-473e-4445-8f6b-bc7017518e91-image.png](/assets/uploads/files/bca87e6e-473e-4445-8f6b-bc7017518e91-image.png)](/assets/uploads/files/bca87e6e-473e-4445-8f6b-bc7017518e91-image.png){: .glightbox }

The path to the executable file has to match the one on your machine of course 😉

Right after that start the service:

```PowerShell
Start-Service Shibari.Dom.Server
```

Check that the service is running:

```PowerShell
Get-Service Shibari.Dom.Server
```

[![b99c4a26-c6fa-4c3d-8186-f63d21412955-image.png](/assets/uploads/files/b99c4a26-c6fa-4c3d-8186-f63d21412955-image.png)](/assets/uploads/files/b99c4a26-c6fa-4c3d-8186-f63d21412955-image.png){: .glightbox }

Done, delightful 😃

### My controller is randomly pressing buttons or axes jitter, bug!!1!

Nope, this isn't and never was a software issue. Any misbehavior in regards to reported inputs comes from the controller hardware itself, not my tools. In short: your device is damaged or reached the end of its lifespan, sorry! Time to replace! 😔

If you sport some of those lovely ~~fake~~ aftermarket devices from questionable stores from far away costing only a dime or two then you might have been screwed over and my software is not here to fix hardware manufacturers cuts, get proper genuine hardware or at least higher quality replicas :wink: 

---

***Stay tuned, more answers coming soon...***

![Alastor](/assets/uploads/files/65ffc789b05211faf1585083e2382c0b.gif)

---

!!! important "Copyright (C) 2018-2021 - Nefarius Software Solutions e.U."
    This is a community project and not affiliated with Sony Interactive Entertainment Inc. in any way.

    "PlayStation", "PSP", "PS2", "PS one", "DUALSHOCK" and "SIXAXIS" are registered trademarks of Sony Interactive Entertainment Inc.
