from faker import Faker
import random
fake = Faker()

def create_fake_users(count):
    users = []
    for i in range(count):
        status = "queued" if random.random() < 0.5 else "touring"
        location = ("exploring" if random.random() < 0.5 else "riding") if status == "touring" \
            else ("ticketed" if random.random() < 0.5 else "arrived")
        users.append(
            {
                "firstName": fake.first_name(),
                "lastName": fake.last_name(),
                "id": fake.uuid4(),
                "status": status,
                "location": location
            }
        )
    return users