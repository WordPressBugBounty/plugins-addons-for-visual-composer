<?php

$num_of_comments = intval(get_comments_number());
?>

<span class="lvca-comments"><?php

    if (0 == $num_of_comments && !comments_open() && !pings_open()) {
        echo sprintf(esc_html__('Comments Disabled', 'livemesh-vc-addons'), number_format_i18n($num_of_comments));
    }
    elseif (0 == $num_of_comments)
        echo sprintf(esc_html__('No Comments', 'livemesh-vc-addons'), number_format_i18n($num_of_comments));
    elseif (1 == $num_of_comments)
        echo sprintf(esc_html__('%1$s Comment', 'livemesh-vc-addons'), number_format_i18n($num_of_comments));
    elseif (1 < $num_of_comments)
        echo sprintf(esc_html__('%1$s Comments', 'livemesh-vc-addons'), number_format_i18n($num_of_comments));

    ?></span>