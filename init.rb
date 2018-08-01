require 'redmine_shortcuts/hooks/hooks'

Redmine::Plugin.register :redmine_shortcuts do
  name 'Redmine Shortcuts'
  author 'Davide Giacometti'
  description 'Provides useful keyboard shortcuts'
  version '0.1.0'
  url 'https://github.com/davidegiacometti/redmine_shortcuts'
  author_url 'https://github.com/davidegiacometti'

  settings :partial => 'settings/redmine_shortcuts', :default => {'enable_issue_shortcuts' => '1', 'enable_editor_shortcuts' => '1', 'enable_help_link' => '1', 'help_link_label' => 'Redmine shortcuts'}

  menu :top_menu, :redmine_shortcuts, {:controller => 'help', :action => 'index'}, :caption => Proc.new { Setting.plugin_redmine_shortcuts['help_link_label'] }, :last => true, :if => Proc.new { Setting.plugin_redmine_shortcuts['enable_help_link'] }
end
