#!/usr/bin/env ruby
# Quick validation script for Jekyll posts: unbalanced code fences, excessive horizontal rules, odd filenames
require 'pathname'
root = Pathname.new(File.expand_path('..', __dir__))
posts_dir = root.join('_posts')
problems = []
posts_dir.glob('**/*.md').each do |file|
  content = file.read
  fence_count = content.scan(/^```/).size
  if fence_count.odd?
    problems << {file: file.to_s, issue: "Unbalanced code fences (count=#{fence_count})"}
  end
  if file.basename.to_s =~ /\s/
    problems << {file: file.to_s, issue: 'Filename contains spaces'}
  end
  hr_runs = content.scan(/\n-{3,}\n/).size
  problems << {file: file.to_s, issue: "Many horizontal rule blocks (#{hr_runs})"} if hr_runs > 5
  first_para = content.split(/\n\n+/).find { |b| !(b.start_with?('---') || b.strip.empty? || b.strip.start_with?('#')) }
  if first_para && first_para.strip.start_with?('#')
    problems << {file: file.to_s, issue: 'First content block is a heading (excerpt may be empty)'}
  end
end
if problems.empty?
  puts 'All posts passed basic validation.'
else
  problems.each { |p| puts "[WARN] #{p[:file]} => #{p[:issue]}" }
  exit 1
end
