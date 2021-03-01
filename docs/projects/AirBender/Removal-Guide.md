# AirBender Removal Guide

AirBender didn't ship with an (un-)installer but with a little help of 3rd party tools removal is simple and painless 😃

## How to tell if I have it

Great question! You might not use Bluetooth regularly at all and might have installed it a long time ago and forgotten all about it. No worries though, easiest way is to have a look in Device Manager. Press ++win+x++ and click on Device Manager. Have a look at the Bluetooth section, it might look like so:

![AnyDesk_QREcVZYRZh.png](/images/AnyDesk_QREcVZYRZh.png){: .glightbox }

Look at that, we found it! 😄 Onwards with the next step!

## How to get rid of it

Download, extract and run [Driver Store Explorer](https://github.com/lostindark/DriverStoreExplorer/releases/latest) and look for the AirBender device there, tick it, tick the `Force Deletion` box and finally hit the `Delete Driver(s)` button.

![imFom0RK7M.png](/images/imFom0RK7M.png){: .glightbox }

After that, simply unplug and plugin your Bluetooth dongle or reboot the machine and let Windows download the manufacturer drivers. Done! 🎉
