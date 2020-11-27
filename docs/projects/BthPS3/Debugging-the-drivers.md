# Getting a kernel driver to talk

Kernel Drivers typically don't write traditional log files that end up on the disk somewhere, instead [Event Tracing for Windows](https://docs.microsoft.com/en-us/windows-hardware/test/wpt/event-tracing-for-windows) is used to write messages to a special logging facility we can tap into with a bit of command line magic.

## Capture the trace

### Start trace session

Fire up PowerShell with administrative privileges by pressing ++win+x++ and selecting it from the appearing menu like so:

![Start PowerShell](/images/Y2bzZWdYK4.png)

Once open, paste the following three lines into it "as is" and hit enter:

!!! example "PowerShell"
    ```PowerShell
    New-EtwTraceSession -Name BthPS3 -LogFileMode 0x8100 -FlushTimer 1 -LocalFilePath "C:\BthPS3.etl"
    Add-EtwTraceProvider -SessionName BthPS3 -Guid ‘{37dcd579-e844-4c80-9c8b-a10850b6fac6}’ -MatchAnyKeyword 0x0FFFFFFFFFFFFFFF -Level 0xFF -Property 0x40
    Add-EtwTraceProvider -SessionName BthPS3 -Guid ‘{586aa8b1-53a6-404f-9b3e-14483e514a2c}’ -MatchAnyKeyword 0x0FFFFFFFFFFFFFFF -Level 0xFF -Property 0x40
    ```

Should looks similar to this:

![PowerShell](/images/35cnHUOIwv.png)

### Perform the action you want captured

Now is the time to attempt pairing a controller or whatever logic you wish to test and get captured in the trace log file.

### Stop trace session

Once everything we like to know has been captured, stop the session so the data collection stops and the log file is closed:

!!! example "PowerShell"
    ```PowerShell
    Remove-EtwTraceSession -Name BthPS3
    ```

The log file should now exist under the C:\\-Drive:

![Folder](/images/AnyDesk_LVe8LzooAQ.png)

## Great, I got it, what now

So we've captured the `BthPS3.etl` file, but what now? Well, the easy way is to submit it to Nefarius for analysis 😁 Or, you can take a peek at its contents for yourself if you read on.

To be continued...
