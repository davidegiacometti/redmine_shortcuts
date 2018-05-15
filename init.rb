require 'redmine_shortcuts/hooks/hooks'

Redmine::Plugin.register :redmine_shortcuts do
  name 'Redmine Shortcuts'
  author 'Davide Giacometti'
  description 'Provides useful keyboard shortcuts'
  version '0.0.2'
  url 'https://github.com/davidegiacometti/redmine_shortcuts'
  author_url 'https://github.com/davidegiacometti'

  settings :partial => 'settings/redmine_shortcuts', :default => {'enable_issue_shortcuts' => '1', 'enable_editor_shortcuts' => '1'}
end
