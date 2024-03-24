<template>
    <div class="menu-back-container">
        <a href="https://mixmav.me" class="a"
            ><i class="fa fa-chevron-left" style="font-size: 0.8em"></i
            >mixmav.me</a
        >
    </div>
    <alert></alert>
    <board></board>
    <win-checker></win-checker>
    <game-controls></game-controls>
    <score-board></score-board>
</template>

<script>
import Alert from './components/elements/Alert.vue';
import Board from './components/Board.vue';
import WinChecker from './components/WinChecker.vue';
import GameControls from './components/GameControls.vue';
import ScoreBoard from './components/ScoreBoard.vue';

import $ from 'jquery';

export default {
    components: {
        Alert,
        Board,
        WinChecker,
        GameControls,
        ScoreBoard,
    },

    mounted() {
        this.addEventListener();
    },
    unmounted() {
        this.removeEventListener();
    },
    methods: {
        addEventListener() {
            $('#projects-app-connect-4-container').on(
                'mousedown',
                '.h-ripple',
                function (e) {
                    var $self = $(this);

                    if ($self.closest('[data-ripple], .h-ripple')) {
                        e.stopPropagation();
                    }
                    if ($self.hasClass('disabled')) {
                        return;
                    }

                    var rippleColor = 'rgba(255,255,255,0.5)';

                    if ($self.hasClass('light')) {
                        rippleColor = '#3F51B5';
                    }
                    var initPos = $self.css('position'),
                        offs = $self.offset(),
                        w = Math.min(this.offsetWidth, 160),
                        h = Math.min(this.offsetHeight, 160),
                        x = e.pageX - offs.left,
                        y = e.pageY - offs.top,
                        $ripple = $('<div/>', {
                            class: 'ripple',
                            appendTo: $self,
                        });

                    if (!initPos || initPos === 'static') {
                        $self.css({ position: 'relative' });
                    }

                    $('<div/>', {
                        class: 'rippleWave',
                        css: {
                            background: rippleColor,
                            width: h,
                            height: h,
                            left: x - h / 2,
                            top: y - h / 2,
                        },
                        appendTo: $ripple,
                        one: {
                            animationend: function () {
                                $ripple.remove();
                            },
                        },
                    });
                }
            );
        },

        removeEventListener() {
            $('#projects-app-connect-4-container').off(
                'mousedown',
                '.h-ripple'
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.menu-back-container {
    width: 100%;
    display: flex;
    padding: 1em;
    justify-content: center;
    align-items: center;

    a {
        font-size: 0.8em;
    }
}
</style>
