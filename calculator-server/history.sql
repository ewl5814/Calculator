DROP table if EXISTS history;

CREATE TABLE history (
    id   SERIAL PRIMARY KEY NOT NULL,
    equation TEXT NOT NULL
);


/*INSERT INTO count(count, petridish, experiment)	
VALUES  (0, 1, 'Blister Mutation'),
        (0, 1, 'Hunger Levels'), 
        (0, 1, 'Who What When Where Why');*/
