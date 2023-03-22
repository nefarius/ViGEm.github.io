# ViGEm Runtime .NET Exceptions

!!! attention "This topic is targeted at developers"
    The contents of this article are for a developer audience, if you need support with the runtime [please contact us via the appropriate channels](https://vigem.org/Community-Support/).

## ViGEmApiDriverNotFoundException

TBD

## ViGEmApiDriverAccessFailedException

TBD

## ViGEmApiDriverVersionMismatchException

TBD

## ViGEmApiDriverLicenseExpiredException

Indicates that the license present on the machine has expired. Please make sure that the machine experiencing this error has internet access and has the service `ViGEm License Watchdog` running. You can consult the `Application` logs in the Windows Event Viewer and check for errors from the source `ViGEm License Watchdog`. Restart the service and ensure it is not firewall'ed.
