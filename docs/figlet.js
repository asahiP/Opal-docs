(function () {
  const console_text = function () {
/**
     ___           ___           ___           ___                 
    /\  \         /\__\         /\  \         /\  \                
   /::\  \       /:/ _/_       /::\  \        \:\  \       ___     
  /:/\:\  \     /:/ /\  \     /:/\:\  \        \:\  \     /\__\    
 /:/ /::\  \   /:/ /::\  \   /:/ /::\  \   ___ /::\  \   /:/__/    
/:/_/:/\:\__\ /:/_/:/\:\__\ /:/_/:/\:\__\ /\  /:/\:\__\ /::\  \    
\:\/:/  \/__/ \:\/:/ /:/  / \:\/:/  \/__/ \:\/:/  \/__/ \/\:\  \__ 
 \::/__/       \::/ /:/  /   \::/__/       \::/__/         \:\/\__\
  \:\  \        \/_/:/  /     \:\  \        \:\  \          \::/  /
   \:\__\         /:/  /       \:\__\        \:\__\         /:/  / 
    \/__/         \/__/         \/__/         \/__/         \/__/  

*/
  }

  function encodeFiglet (console_text) {
    let lines = console_text.toString()
    return lines.substring(lines.indexOf("/**") + 4, lines.lastIndexOf("*/"))
  }

  console.log(encodeFiglet(console_text))
})()