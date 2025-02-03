function recommendWorkout() {
    // Get user inputs
    var age = document.getElementById('age').value;
    var purpose = document.getElementById('purpose').value;

    // Initialize the result variable
    var result = '';

    // Check age and purpose to generate workout plan
    if (purpose === 'flexibility') {
        if (age < 18) {
            result = "<strong>7 Day Flexibility Workout Plan for Beginners</strong><br><br>" +
                     "Day 1: Gentle Stretching - Focus on hamstrings and calves<br>" +
                     "Day 2: Hip Flexor Stretches - Butterfly and lunges<br>" +
                     "Day 3: Upper Body Stretching - Shoulder and arm stretches<br>" +
                     "Day 4: Spine Flexion - Cat-Cow and child’s pose<br>" +
                     "Day 5: Leg Stretches - Forward fold and pigeon pose<br>" +
                     "Day 6: Yoga Flow - Sun Salutations (5 rounds)<br>" +
                     "Day 7: Full Body Stretch - Relaxing yoga session";
        } else if (age >= 18 && age <= 35) {
            result = "<strong>7 Day Flexibility Workout Plan for Adults</strong><br><br>" +
                     "Day 1: Gentle Stretching - Focus on hamstrings and calves<br>" +
                     "Day 2: Hip Flexor Stretch - Butterfly and lunges<br>" +
                     "Day 3: Full Body Stretching - Focus on quads and glutes<br>" +
                     "Day 4: Spine Flexion - Cat-Cow, child’s pose, and twists<br>" +
                     "Day 5: Leg Stretching - Forward fold, pigeon pose, and frog pose<br>" +
                     "Day 6: Vinyasa Flow - Sun Salutations and standing stretches<br>" +
                     "Day 7: Restorative Yoga - Focus on deep stretches and breathing";
        } else {
            result = "<strong>7 Day Flexibility Workout Plan for Seniors</strong><br><br>" +
                     "Day 1: Gentle Stretching - Focus on arms and legs<br>" +
                     "Day 2: Lower Back Stretches - Seated forward fold and cat-cow<br>" +
                     "Day 3: Hamstring Stretching - Standing stretches and seated stretch<br>" +
                     "Day 4: Shoulder and Neck Stretches - Gentle stretches and mobility<br>" +
                     "Day 5: Hip Flexor Stretch - Butterfly and seated stretches<br>" +
                     "Day 6: Full Body Stretch - Focus on neck, shoulders, and back<br>" +
                     "Day 7: Relaxing Yoga - Slow, restorative poses";
        }
    } else if (purpose === 'strength') {
        if (age < 18) {
            result = "<strong>7 Day Strength Workout Plan for Beginners</strong><br><br>" +
                     "Day 1: Bodyweight Squats, Push-ups, and Planks (3 sets each)<br>" +
                     "Day 2: Restorative Yoga or Stretching<br>" +
                     "Day 3: Lunges, Chair Dips, and Plank Holds (3 sets each)<br>" +
                     "Day 4: Push-ups, Leg Raises, and Squats (3 sets each)<br>" +
                     "Day 5: Active Rest Day - Go for a walk or light jogging<br>" +
                     "Day 6: Squats, Jumping Jacks, and Push-ups (3 sets each)<br>" +
                     "Day 7: Full-body Stretch and Mobility Work";
        } else if (age >= 18 && age <= 35) {
            result = "<strong>7 Day Strength Workout Plan for Adults</strong><br><br>" +
                     "Day 1: Push-ups, Squats, and Plank Holds (4 sets each)<br>" +
                     "Day 2: Dumbbell Rows, Glute Bridges, and Lunges (3 sets each)<br>" +
                     "Day 3: Rest Day or Yoga<br>" +
                     "Day 4: Deadlifts, Push-ups, and Jump Squats (3 sets each)<br>" +
                     "Day 5: Active Rest Day - Light Cardio or Walking<br>" +
                     "Day 6: Pull-ups, Squats, and Burpees (4 sets each)<br>" +
                     "Day 7: Stretching and Mobility Focus";
        } else {
            result = "<strong>7 Day Strength Workout Plan for Seniors</strong><br><br>" +
                     "Day 1: Bodyweight Squats, Wall Push-ups, and Planks (2 sets each)<br>" +
                     "Day 2: Stretching and Gentle Movement<br>" +
                     "Day 3: Chair Dips, Standing Leg Lifts, and Glute Bridges (2 sets each)<br>" +
                     "Day 4: Walking, Light Stretching<br>" +
                     "Day 5: Bodyweight Squats, Standing Push-ups, and Arm Circles (2 sets each)<br>" +
                     "Day 6: Active Rest Day - Light Walking or Swimming<br>" +
                     "Day 7: Stretching and Mobility Focus";
        }
    } else if (purpose === 'stress') {
        if (age < 18) {
            result = "<strong>7 Day Stress Relief Workout Plan</strong><br><br>" +
                     "Day 1: Deep Breathing & Child’s Pose (10 mins)<br>" +
                     "Day 2: Yoga Flow - Sun Salutations (5 rounds)<br>" +
                     "Day 3: Restorative Yoga - Relaxing poses<br>" +
                     "Day 4: Breathing Exercises (Box Breathing)<br>" +
                     "Day 5: Gentle Yoga Flow - Focus on hips and shoulders<br>" +
                     "Day 6: Meditation and Body Scan (10-15 minutes)<br>" +
                     "Day 7: Rest Day or Light Stretching";
        } else if (age >= 18 && age <= 35) {
            result = "<strong>7 Day Stress Relief Workout Plan</strong><br><br>" +
                     "Day 1: Meditation and Deep Breathing (10 mins)<br>" +
                     "Day 2: Yoga Flow - Sun Salutations and Standing Poses<br>" +
                     "Day 3: Breathing Techniques (Box Breathing)<br>" +
                     "Day 4: Restorative Yoga - Focus on deep stretches<br>" +
                     "Day 5: Meditation - Mindfulness and focus exercises<br>" +
                     "Day 6: Gentle Yoga Flow - Pigeon Pose, Child’s Pose, and more<br>" +
                     "Day 7: Full Body Stretch and Mindfulness Meditation";
        } else {
            result = "<strong>7 Day Stress Relief Workout Plan</strong><br><br>" +
                     "Day 1: Gentle Breathing and Relaxation Techniques<br>" +
                     "Day 2: Restorative Yoga - Child’s Pose and Cat-Cow<br>" +
                     "Day 3: Breathing Exercises - 4-7-8 Breathing<br>" +
                     "Day 4: Meditation - Guided Relaxation (10 mins)<br>" +
                     "Day 5: Yoga Flow - Focus on balance and breathing<br>" +
                     "Day 6: Mindfulness Walking or Stretching<br>" +
                     "Day 7: Relaxing Yoga Session - Focus on stress reduction";
        }
    }
    console.log(result);
    // Display the result
    document.getElementById('result').innerHTML = result;
}
