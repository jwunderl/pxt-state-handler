# pxt-state-handler

Concepts:

* Maintain state, and implement animations on top of that.
* Allow explicit use (i.e. 'turn on this animation' explicitly from user or potentially based off ``() => boolean`` handlers)
* Automatically set state with certain modes
    * 'facing' whichever direction based off most recent velocities
* Modifiers: Applied to change animations for different states
    * 'Idle' modifier can be applied depending on direction the character is 'facing'
    * Then, when 'motion' modifier occurs, switch animation set used (now moving right instead of facing right idly)
    * examples: idle, moving, jumping, damaged as default example options, but fully user definable
* Blocking Modifiers: Apply an action, and do not switch states until that action is complete
    * "Attack" action does the full sword sweep, even if the player tries to switch direction
    * examples: attack, block, dodge
        * Can attach effects or hitboxes to these to allow easy implementation of invincibility frames (iFrames)
* Asset types:
    * static image: simplest form, set one image for each state
    * animation: define single animations for each state
    * can define hitboxes (rather than using default ones) for more control over animation
        * (e.g. you might have clothes that move back and forth, but changing the hitbox might not make sense / you would want a smaller hitbox / etc)
* effects that can be attached to states:
    * particle effects that occur while you're walking left or right
    * sound occurs whenever damaged and attacking states starts
    



## TODO

- [ ] Add a reference for your blocks here
- [ ] Add "icon.png" image (300x200) in the root folder
- [ ] Add "- beta" to the GitHub project description if you are still iterating it.
- [ ] Turn on your automated build on https://travis-ci.org
- [ ] Use "pxt bump" to create a tagged release on GitHub
- [ ] Get your package reviewed and approved https://arcade.makecode.com/packages/approval

Read more at https://arcade.makecode.com/packages/build-your-own

## License



## Supported targets

* for PXT/arcade
(The metadata above is needed for package search.)

