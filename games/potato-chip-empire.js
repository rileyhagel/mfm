//////////////////////////////////////
//                                  //
//       Potato Chip Empire         //
//                                  //
//  Created by Monkeys for Monkeys  //
//             2025                 //
//                                  //
//////////////////////////////////////

/*

    Written by:
        Riley Hagel

*/




// Download and Load
function download(data, name) {
    var dataURI = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
    var html = '<a href="data:' + dataURI + '" download="' + name +'.pce">Save File</a>'
}