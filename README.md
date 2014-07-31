jquery.advancedBreak
=====================

Creates new event for *window* called **break** and returns this resolution index starting from biggest to smaller.

- Before 1st break (biggest resolution): index **0**
- Betweeen 1st and 2nd breaks: index **1**
- Betweeen 2nd and 3th breaks: index **2**
- Between (m)th and (n)th resolutins: index **m**
- After (n)th break (smallest resolution): index **n**

## Instalation

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="jquery.advancedBreak.js"></script>
<script>
var my_breaks = [320,480,768];
var breaks = $(window).advancedBreaks(my_breaks);
</script>
```

## Use:

```javascript
$(window).on({
load: function() { console.log(breaks.getIndex()); /* do something else */ },
break: function(event, index) { console.log(index); /* do something else */ }
});
```

Please check [jquery.advancedScroll](https://github.com/luizgamabh/jquery.advancedScroll)
