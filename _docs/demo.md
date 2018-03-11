---
title: Installer Demo
---

This is some generic text that's applicable to every installation situation, however, things can be wrapped for <span class="linux">Linux</span> or <span class="windows">Windows</span>, and so forth. Be sure to have the pre-requisites to install life:

- Water  
- Air
- Earth
- Fire

## Install dependancies

<div class="linux" markdown="1">
This is specific to linux.

```bash
dnf install yum
yum apt sudo koodo
```
</div>


> Danger
{: .danger }

> Warning
{: .warning }

> Info
{: .info }

<div class="windows" markdown="1">
You're using windows. It's suggested to first install linux or get a mac

```powershell
if platform_family?('windows')

  nt_version = ::Windows::VersionHelper.nt_version(node)
  # WMF 4.0 is only compatible with:
  # * Windows NT 6.1 (Windows Server 2008R2 & Windows 7.1)
  # * Windows NT 6.2 Server (Windows Server 2012 not Windows 8)
  if nt_version == 6.1 || (nt_version == 6.2 && ::Windows::VersionHelper.server_version?(node))

    # Ensure .NET 4.5 is installed or installation will fail silently per Microsoft.
    raise 'Attribute ms_dotnet.v4.version is not configured to install .NET4.5 as required for Powershell4' if node['ms_dotnet']['v4']['version'] < '4.5'
    include_recipe 'ms_dotnet::ms_dotnet4'

    # Reboot if user specifies doesn't specify no_reboot
    include_recipe 'powershell::windows_reboot' unless node['powershell']['installation_reboot_mode'] == 'no_reboot'

    windows_package 'Windows Management Framework Core 4.0' do # ~FC009
      source node['powershell']['powershell4']['url']
      checksum node['powershell']['powershell4']['checksum']
      installer_type :custom
      options '/quiet /norestart'
      action :install
      returns [0, 42, 127, 3010, 2_359_302]
      # Note that the :immediately is to immediately notify the other resource,
      # not to immediately reboot. The windows_reboot 'notifies' does that.
      notifies :reboot_now, 'reboot[powershell]', :immediately if node['powershell']['installation_reboot_mode'] != 'no_reboot'
      not_if { ::Powershell::VersionHelper.powershell_version?('4.0') }
    end
  else
    Chef::Log.warn("PowerShell 4.0 is not supported or already installed on this version of Windows: #{node['platform_version']}")
  end

else
  Chef::Log.warn('PowerShell 4.0 can only be installed on the Windows platform.')
end
```
</div>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur libero, pariatur eos voluptatem cupiditate quibusdam asperiores. Magnam iusto molestiae voluptatem asperiores quidem sequi reprehenderit incidunt, veritatis sit, voluptatibus officiis.
