$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width: 10,
        color: "green",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "Processing"
    }).circularProgress('animate', 100, 2500);
});
