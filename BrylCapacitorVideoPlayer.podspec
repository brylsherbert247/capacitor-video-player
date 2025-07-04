require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name = 'BrylCapacitorVideoPlayer'
  s.version = package['version']
  s.summary = package['description']
  s.license = package['license']
  s.homepage = package['repository']['url']
  s.author = package['author']
  s.source = { 
    :git => 'https://github.com/brylsherbert247/capacitor-video-player.git', 
    :tag => "v#{s.version}" 
  }
  s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
  s.ios.deployment_target  = '14.0'
  s.dependency 'Capacitor', '~> 7.0'
  s.swift_version = '5.5'

  s.module_name = 'BrylCapacitorVideoPlayer'
  s.requires_arc = true
end
