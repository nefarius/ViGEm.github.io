# Sign .NET assemblies during build

Create a new file named `Directory.Build.props` next to your `.sln` file with the following content:

```xml
<Project>
  <Target Name="SignIntermediateAssembly" BeforeTargets="GetCopyToOutputDirectoryItems" Condition="'$(SignAssemblies)' == 'True'">
    <Exec Command="signtool.exe sign /v /n &quot;Nefarius Software Solutions e.U.&quot; /tr http://timestamp.digicert.com /fd sha256 /td sha256 &quot;%(IntermediateAssembly.FullPath)&quot;" />
  </Target>
</Project>
```

Add `/p:SignAssemblies=True` to your build/publish command, e.g.:

```PowerShell
dotnet build -c Release /p:Platform="Any CPU" /p:SignAssemblies=True
```
