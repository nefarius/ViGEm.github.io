# Compatible Bluetooth Devices

Non-exhaustive list of Bluetooth host devices known to work with the drivers and supported controller devices. Meaning of Status column:

- ✔️ = tested and confirmed working
- ❔ = assumed to work (ported over from old Wiki)
- ❌ = has issues (see Remarks)

## USB Dongles

Hardware ID | Name | Status | Remarks
----------- | ---- | ------ | -------
`USB\VID_0A12&PID_0001` | Hama Nano Bluetooth USB Adapter | ✔️ | Very common chip used in multiple brands, typically displayed in Windows as "Generic Bluetooth Radio".
`USB\VID_0461&PID_4D75` | Rocketfish™ Bluetooth USB Adapter RF-FLBTAD | ❔ | 
`USB\VID_050D&PID_065A` | Belkin F8T065bf | ❔ | 
`USB\VID_07D1&PID_F101` | DBT-122 Wireless USB Bluetooth Adapter | ❔ | 
`USB\VID_0B05&PID_17CB` | ASUS USB-BT400 | ✔️ | 
`USB\VID_0DF6&PID_2200` | Sitecom CN-512 | ❔ | 
`USB\VID_0E5E&PID_6622` | Conwise CW6622 | ❔ | 
`USB\VID_1131&PID_1001` | ISSC KY-BT100 | ❔ | 
`USB\VID_0BB4&PID_0306` | Broadcom BCM20703 | ❌ | HTC VIVE (Steam OpenVR) customized device. Can be used in parallel with "vanilla" dongle without issues though.
`USB\VID_0BDA&PID_8771` | Dark Bluetooth 5.0 Mini Dongle Usb Receiver (DK-AC-BTU50) | ✔️ | Realtek Bluetooth 5.0 Adapter shown at Device Manager.

## Integrated Modules/Chips in Laptops or other Devices

Hardware ID | Name | Status | Remarks
----------- | ---- | ------ | -------
`USB\VID_8087&PID_07DC` | Intel(R) Wireless Bluetooth(R) | ✔️ | 
`USB\VID_0489&PID_E052` | Broadcom BCM20702 Bluetooth USB Device | ✔️ | 
`USB\VID_03F0&PID_231D` | HP Integrated module with Bluetooth wireless technology (Broadcom BCM2070) | ❔ | 
`USB\VID_044E&PID_3010` | ALPS-UGPZ9-BCM2046 | ❔ | 
`USB\VID_046D&PID_C709` | HP Bluetooth Module with trace filter | ❔ | 
`USB\VID_047D&PID_105E` | Kensington Bluetooth EDR Dongle | ❔ | 
`USB\VID_0489&PID_E011` | Broadcom BCM2046 | ❔ | 
`USB\VID_0489&PID_E027` | Atheros AR3011 Bluetooth(R) Adapter | ❔ | 
`USB\VID_0489&PID_E042` | Broadcom BCM20702 | ❔ | 
`USB\VID_0489&PID_E04D` | Atheros AR3012 Bluetooth(R) Adapter | ❔ | 
`USB\VID_0489&PID_E04E` | Bluetooth USB Module | ❔ | 
`USB\VID_04CA&PID_3006` | BlueSoleil Generic Bluetooth Driver | ❔ | 
`USB\VID_050D&PID_016A` | Broadcom BCM2046B1 (Belkin) | ❔ | 
`USB\VID_05AC&PID_8216` | Broadcom Bluetooth 2.1 (MacBookAir2) | ❔ | 
`USB\VID_05AC&PID_821A` | Apple Broadcom Built-in Bluetooth (MacBookPro8) | ❔ | 
`USB\VID_05AC&PID_821D` | Apple Broadcom Built-in Bluetooth (MacBookPro9) | ❔ | 
`USB\VID_05AC&PID_821F` | Apple Broadcom Built-in Bluetooth (MacBookAir4) | ❔ | 
`USB\VID_05AC&PID_8286` | Apple Broadcom Built-in Bluetooth (MacBookPro10) | ❔ | 
`USB\VID_0930&PID_0214` | Bluetooth USB Controller-9 from TOSHIBA (Broadcom BCM2070) | ❔ | 
`USB\VID_0930&PID_0215` | Bluetooth USB Controller-10 from TOSHIBA | ❔ | 
`USB\VID_0A5C&PID_200A` | Broadcom BCM2035 | ❔ | 
`USB\VID_0A5C&PID_2021` | Broadcom BCM2035B3 | ❔ | 
`USB\VID_0A5C&PID_2100` | Broadcom BCM2045 | ❔ | 
`USB\VID_0A5C&PID_2101` | Broadcom BCM2045 | ❔ | 
`USB\VID_0A5C&PID_2146` | Broadcom BCM2046 | ❔ | 
`USB\VID_0A5C&PID_2148` | Broadcom BCM92046DG | ❔ | 
`USB\VID_0A5C&PID_2150` | Broadcom BCM2046 | ❔ | 
`USB\VID_0A5C&PID_2153` | Broadcom BCM2046 | ❔ | 
`USB\VID_0A5C&PID_2154` | Broadcom BCM92046DG-CL1ROM Bluetooth 2.1 UHE Dongle | ❔ | 
`USB\VID_0A5C&PID_217D` | HP Bluetooth module | ❔ | 
`USB\VID_0A5C&PID_2190` | Broadcom BCM2070 | ❔ | 
`USB\VID_0A5C&PID_2198` | Broadcom BCM2070 | ❔ | 
`USB\VID_0A5C&PID_21B4` | Broadcom BCM2070 | ❔ | 
`USB\VID_0A5C&PID_21E1` | Broadcom BCM20702A0 (Driver for Hewlett-Packard) | ❔ | 
`USB\VID_0A5C&PID_21E3` | Broadcom BCM20702A0 (Driver for Hewlett-Packard) | ❔ | 
`USB\VID_0A5C&PID_21E8` | Broadcom BCM20702A0 | ✔️ | Uses manufacturer-specific driver from 2015 (from Microsoft Update Catalog)
`USB\VID_0B05&PID_1715` | ASUS Bluetooth Dongle (Broadcom BCM2045) | ❔ | 
`USB\VID_0B05&PID_1783` | ASUS Bluetooth v2.1 USB Adapter | ❔ | 
`USB\VID_0B05&PID_1788` | BT-270 (ASUS) | ❔ | 
`USB\VID_0B05&PID_179C` | Bluetooth (ASUS) | ❔ | 
`USB\VID_0B05&PID_17B5` | Bluetooth (ASUS) | ❔ | 
`USB\VID_0B05&PID_B700` | BT-253 (ASUS) | ❔ | 
`USB\VID_0BDA&PID_0724` | Realtek Bluetooth 4.0 | ❔ | 
`USB\VID_0BDA&PID_8723` | Realtek Bluetooth 4.0 | ❔ | 
`USB\VID_0CF3&PID_3002` | Atheros AR3011 | ❔ | 
`USB\VID_0CF3&PID_3004` | Atheros AR3012 | ❔ | 
`USB\VID_0CF3&PID_3005` | Atheros AR3011 | ❔ | 
`USB\VID_0DB0&PID_3801` | Motorola Bluetooth 2.1+EDR Device (MSI) | ❔ | 
`USB\VID_1131&PID_1004` | ISSC (EDR) Bluetooth USB Adapter | ❔ | 
`USB\VID_1286&PID_2044` | Marvell AVASTAR Bluetooth Radio Adapter (Microsoft Surface) | ❔ | 
`USB\VID_13D3&PID_3304` | Atheros AR3011 (Azurewave Janus 3304) | ❔ | 
`USB\VID_13D3&PID_3315` | Bluetooth module (ASUS) | ❔ | 
`USB\VID_413C&PID_8126` | Dell Wireless 355 Module with Bluetooth 2.0 + EDR Technology | ❔ | 
`USB\VID_413C&PID_8197` | Dell Wireless 380 Bluetooth 4.0 Module (Broadcom BCM20702A0) | ❔ | 
`USB\VID_8086&PID_0189` | Intel Centrino Advanced-N 6230 Bluetooth adapter | ❔ | 
`USB\VID_8087&PID_07DA` | Intel Centrino Wireless Bluetooth 4.0 + High Speed Adapter | ❔ | 

## Unknown Devices

Hardware ID | Name | Status | Remarks
----------- | ---- | ------ | -------
`USB\VID_045E&PID_3500` | ❔ | ❔ | 
`USB\VID_0B05&PID_1785` | ❔ | ❔ | 
