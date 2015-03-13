THIS WILL NOT COMPILE IN MARKDOWN. THAT'S INTENTIONAL AND WE SHOULD CHANGE THE
FILE TYPE I GUESS BUT 50% OF THE SYNTAX HIGHLIGHTING IS REALLY HELPFUL

# a more ordered list of high-priority todos
* barfs to respond to barfs (not inline)
* the barf bucket (store chunks)
* the barf bucket (store barfs and chunks)
* create barfs from bucket contents
* respond to messages with inline barfs
* respond to barfs with inline barfs (barf inclusion)
* keyboard interface
* create labeled sets of messages and lists (this must be a barf itself, I think)
* rearrange barfs and messages
* private barfs
* rearrange barfs and messages
* agendas/barf-sculptures


scratchpad
----------

are direct responses to barfs really just inline barfs in a bigger conversation
with potentially no label?

     ____________________________
    |     (anonymous barf)       |
    |  ________________________  |
    | | inner_barf 1:          | |
    | | * some_message         | |
    | | * some_other-text]     | |
    |  ------------------------  |
    |  ________________________  |
    | | inner-barf 2:          | |
    | | * another message      | |
    | | * ooh another response | |
    | | * a third set of-words]| |
    |  ------------------------  |
     ----------------------------

is it really an instance of a new barf started from all the messages of the
previous?


     ____________________________
    |         (barf_2)           |
    |  ________________________  |
    | | subject: barf_1's msgs | |
    | | * some_message         | |
    | | * some_other-text      | |
    |  ------------------------  |
    |  ________________________  |
    | |       barf 2:          | |
    | | * another message      | |
    | | * ooh another response | |
    | | * a third set of-words | |
    |  ------------------------  |
     ----------------------------

should we be able to group barfs, and how so -- also, should we be able to
 have two different threads in a single barf?

barfs are probably time-dependent things: you shouldn't really be switching
between two different contexts -- unless you preserve how you got there.

support for asides during conversation -- linked to previous messages but
visually separate -- make clear different threads but also time

maybe asides are create anonymous barf around each chunk 1, 2 (aside), 3
and then have 3 reference 1
 referencing/containment vs ordering is the primary question

so maybe you can reference the same messages multiple times -- like:

####barf from messages 1, 2, 3        ____________________________
* discuss message 2 <----------------| these two messages         |
  * heres some thoughts              | responses are separate     |
  * here's some other thougths       | and ordered within the     |
* discuss message 1 <----------------| context of the parent barf |
  * these are some things i think     ----------------------------
  * here are some more                                     ________________________
* now in the case of message 2 again you can see          | this message CONTAINS  |
* now in the case of messages 1 and 3 blah blah blah <--- | the message about 1,   |
                                                          | and(?) messages        |
  in the above conversation, all the bullet-points are    | 1 and 3 on their own(?)|
   actually reflecting of a time-dimension and a            ------------------------
   connectedness in causalitiy -- so they are all
   contained in a single barf, reflecting that it's
   basically somehow thought to be a single train of thought

how do you decomopose this into a set of trivial barfs -- barfs where you're
responding to a message or collection of messages, if ordering does matter?

what's the simplest way to do this from an interface/learnability perspective?

does this really mean that there are four connected barfs in here?

say that messages 1 and 3 are from the same barf, and 2 is from a different one
how does that change things?

and/or that discussion 3 is another barf from message 1?

and/or that discussion 4 is another barf of all the previous messages with the
nesting preserved? -- this is like commenting on a forward in an email vs
replying without copying it

"SCOPE" -- think function parameters versus variable assignment etc versus
namespaces etc -- pulling context with them -- then you actually pull the
context containing the message instead

see all barfs containing this message ("how many people took this and ran with
it and in what way?")

this is a real network structure

context-- cache where link was pulled from ("i was reading this and had an
idea") -- but not further levels -- except the message itself

should we consider a message in a barf to be referencing the context of the
previous messages (and foreshadowing the rest) automatically? probably, yes,
because that's the relationship of the stream of consciousness -- time over
everything else, context as environment, drag in associations (in the sense of
"cognitive association test") as needed (quickly)

so what we're doing is providing a bunch of different associative "pasts" to go
back into message-land with -- you have dominant time split up into many streams
--in the sense of electricity, because you can fork the streams as you go
forward or back -- in this case, the "aside" feature might be really helpful,
especially if you can distinguish between a subheading-style aside and a
sidebar-style aside 

what would messages look like if we assume that conversation is associative and
not linear/predictable/computational/hierarchical -- subconversations
"structured programming interface", linear "imperative programming interface",
conversations dictated by causality "event-driven programming interface", etc

functional?

associative programming -- enabling people to switch and return to things and
add features and tinker


styling thoughts
----------------

* should we crowd messages so that they're stacked, or imply stacking?
  * as it is now in a wide window you have to move your eyes too far to see the
     flow of a conversation
  * should maybe squeeze the window horizontally and give a sidebar more space
     for more features



aside thoughts: do the math on a company-based currency backed by company stock
where a rise in price of the stock leads to a dilution of shares by giving every
holder of the currency a flat division of the total increase in value
you would actually want people to never exit holding the stock so perhaps it
would actually just be shares of the company -- paying dividends, etc

if you were a real market loonie you'd say that the total holdings of the
internal currency represented the amount of real unstated value added by the
employee as reflected by the internal market -- there might be something
salvageable there if you drastically restrict wealth-effects on performance &
capability


the power of paper is fast navigation and the easy aside-- you dont have to say
create new paper, move out this paper and move in this paper

TWO WAYS OF LOOKING AT THIS DESIRE
im a big entitled baby
  i literally get mad when im forced to touch a mouse or god forbid mouse and
scroll

  or, we need to develop a sense for when we are abusing ourselves as humans by
being beholden to these systems -- the cowness of a cow, joel salatin, bret
victor

RETRIEVE INFORMATION THROUGH CONTEXT QUERIES RATHER THAN CONTENT QUERIES
