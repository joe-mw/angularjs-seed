$(function () {
    
    // loop through the original items
    $("#original_items span").each(function () {
        
        // clone the original items to make their absolute-position counterparts
        let item = $(this);
        let item_clone = item.clone();

        // store the clone for later use
        item.data("clone", item_clone);
    })
})