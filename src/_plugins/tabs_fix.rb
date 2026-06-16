# 修复 Chirpy 主题的 site.tabs 导航
# Jekyll 4.x 不自动暴露自定义集合为 site.<name>
# 通过 Generator 注入到 site.data

Jekyll::Hooks.register :site, :post_read do |site|
  tabs_coll = site.collections['tabs']
  next unless tabs_coll

  tabs = tabs_coll.docs.map do |doc|
    {
      'url'   => doc.url,
      'title' => doc.data['title'],
      'icon'  => doc.data['icon'],
      'order' => doc.data['order'] || 0
    }
  end

  tabs.sort_by! { |t| t['order'] }
  site.data['tabs'] = tabs
end
