module RedmineShortcuts
  class Hooks < Redmine::Hook::ViewListener
    def view_layouts_base_body_bottom(context = {})
      context[:controller].send(:render_to_string, { partial: 'hooks/view_layouts_base_body_bottom', locals: context })
    end
    
    def view_issues_show_details_bottom(context = {})
      context[:controller].send(:render_to_string, { partial: 'hooks/view_issues_show_details_bottom', locals: context })
    end

    def view_issues_index_bottom(context = {})
      context[:controller].send(:render_to_string, { partial: 'hooks/view_issues_index_bottom', locals: context })
    end

    def view_layouts_base_html_head(context = {})
      context[:controller].send(:render_to_string, { partial: 'hooks/view_layouts_base_html_head', locals: context })
    end
  end
end
