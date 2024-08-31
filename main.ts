music.setTempo(30)
basic.forever(function () {
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
})
