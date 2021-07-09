# History of SCP

!!! note "Back to the future"
    My little attempt to piece together a rough timeline of SCPs progression through history 😅

## August 2011

[Birth of ScpServer Saga](https://forums.pcsx2.net/Thread-XInput-Wrapper-for-DS3-and-Play-com-USB-Dual-DS2-Controller?pid=186161#pid186161).

The Epoch moment! A mysterious and to this day anonymous user of the nickname [Scarlet.Crush](https://forums.pcsx2.net/User-Scarlet-Crush) has started publishing and documenting work to tackle the issue of the DualShock 3 not behaving properly with Windows stock drivers. This solution also evolved heavily over time, had seen different components and strategies come and go and is a treasure chest of reverse engineering information.

## May 2014

[Scarlet.Crush last post](https://forums.pcsx2.net/Thread-XInput-Wrapper-for-DS3-and-Play-com-USB-Dual-DS2-Controller?pid=371071#pid371071).

A saddening point in history where Scarlet.Crush was last seen alive. Probably gotten consumed by wolves in the wild while going on a hike. Or a potentially less dramatic explanation of simply becoming tired of community support and moving on with life. Might have even gotten married or finally retired the Sony controllers and gave into the dark side purchasing an Xbox 360 controller. One can only speculate!

## July 2015

[Nefarius enters the stage](https://forums.pcsx2.net/Thread-XInput-Wrapper-for-DS3-and-Play-com-USB-Dual-DS2-Controller?pid=471846#pid471846).

A young, naive, inexperienced and slightly less cynical individual enters the stage. I've stumbled upon this project after buying a Sony DualShock 3 controller in a local electronics market *on accident* for the sole purpose of playing on Windows (in Nintendo emulators to be precise). As I've never owned a game console myself before (PC/Microsoft fanboy 😇) I simply assumed that any controller with the trusty familiar Bluetooth logo on the packaging implicitly means that Windows will eat it up just fine. Oh boy, was I wrong! But being the curious (and lazy) soul I was instead of returning it for an Xbox controller I started a little web search and found the - now abandoned yet risen in popularity - SCP Server project. Intrigued by the fact that the author also left the full source code behind and it being C# (a language I was fairly familiar with back in the days) I tried my spin on it to answer the cries for updates and fixes, especially with Windows 10 on the rise and making the project work in this new OS version. From that point in time it's been code, test, code, read, code, revert, read, code, study, test, support, reply, code, read, code, support, ... you get the idea 😅

## August 2015

[New Thread announcement](https://forums.pcsx2.net/Thread-XInput-Wrapper-for-DS3-and-Play-com-USB-Dual-DS2-Controller?pid=474184#pid474184).

Time to move! The crowd had accepted me as their new lord and saviour (narcissist much?) so I decided to move to my own fresh thread for the now re-branded "ScpToolkit" - a name chosen simply because of the sheer amount of sub-projects within the solution for all the various tasks (driver installer, service, stand-alone server, tray application, troubleshooter component, etc.). I had no idea how popular it would become so I simply kept the "SCP" prefix, which is *not* related to the [SCP Foundation](http://www.scpwiki.com/) but simply stands for "Scarlet.Crush Productions", a fictitious company name chosen by our vanished predecessor.

[New Thread created](https://forums.pcsx2.net/Thread-ScpToolkit-XInput-Wrapper-aka-ScpServer-Reloaded?pid=474175#pid474175).

From now on, most of the communication (change-log snippets, exchanged ideas, support inquiries, etc.) happens here as more and more users hop onto the ScpToolkit train.

## January 2016

[Last stable release](https://github.com/nefarius/ScpToolkit/releases/tag/v1.6.238.16010).

Time flies and we come close to the realization that SCP as a ginormous C# project isn't really sustainable and maintainable in the long run. SCP did *everything* a device driver (or set of) should have done in user-land. It was insane. It worked but was still insane. Things had to change. And they did.

## April 2016

[Last Beta release](https://github.com/nefarius/ScpToolkit/releases/tag/v1.7.277.16103-BETA)

One last attempt to learn from past mistakes, a polished release with a new overhauled driver installer wizard holding the hands of the user but limiting their freedom to tinker in comparison to version 1.6. It should never see another (stable) update 😧

This was also the time where the first experiments with the ViGEm Bus Driver arose in secrecy.

## June 2017

[Last commits fizzle out](https://github.com/nefarius/ScpToolkit/commit/cc8f383a3726c435d853040a85c8f572b59fc157).

As an overwhelming amount of feature and support requests kept pouring in, basically obstructing any meaningful push towards a new update, the last attempts to keep motivation up started to dry up. SCP got killed by too high of a demand and too little of the FOSS spirit: contributions. I had to pull the plug or I would've lost my hopes in open-source software and coding in general entirely as I've been forced into the position of a help desk operator. Not something I enjoy to spend my free time with 🙂 Working on ViGEm's early designs was far more challenging and interesting than babysitting people flooding the issue tracker with duplicates, off-topic content and an overall disgusting trend towards entitlement for something they received for absolutely free. Go figure! So in a sense, the (grown rather big) portion of the user-base of entitled crybabies is what killed SCP in the long run 🔥

## January 2018

[Last commit cleaning the issue tracker](https://github.com/nefarius/ScpToolkit/commit/c082de827fb6ec3efdff0a7a632977fbdff898e1).

Not gonna lie, this was a fun task to pull of. I grabbed all the open issue IDs through the GitHub API and crafted one last apocalyptic commit triggering GitHub's automation to close all remaining issues so the project could be archived on a clean slate. After that, the project got archived for good. So long 🖖

## January 2019

[Official death announcement](https://forums.pcsx2.net/Thread-ScpToolkit-XInput-Wrapper-aka-ScpServer-Reloaded?pid=595090#pid595090).

As other projects had started to take priority in my life I left SCP bubble around (especially the threads on the PCSX2 forums which received the most traffic, still) and finally a year later made the official statement in those places, that the ride had indeed ended and people needed to move on.

The end ❤️
