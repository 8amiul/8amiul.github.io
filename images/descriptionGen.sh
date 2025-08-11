#!/bin/bash
i=66
n=77+1 # Number of elements you want in the list

# Start the array
images="let images = ["

for ((; i<n; i++)); do
    # Add each element to the list with img and description properties
    if [[ $i -lt $((n-1)) ]]; then
        images+="\n\t{ \n\t\timg: \"${i}.jpg\", \n\t\tdescription: \"This is a description for image $i\"\n\t}, "
    else
        images+="\n\t{ \n\t\timg: \"${i}.jpg\", \n\t\tdescription: \"This is a description for image $i\"\n\t}"
    fi
    images+=$'\n'
done

# End the array
images+="]"

# Output the result
echo -e "$images"
