"""comments

Revision ID: 0bc4a3dbfab8
Revises: a9951fece60a
Create Date: 2021-11-16 13:59:23.820460

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '0bc4a3dbfab8'
down_revision = 'a9951fece60a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('postId', sa.Integer(), nullable=False),
    sa.Column('body', sa.VARCHAR(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id']),
    sa.ForeignKeyConstraint(['postId'], ['posts.id']),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'profileImage',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.create_table('posts',
    sa.Column('id', sa.INTEGER(), server_default=sa.text("nextval('posts_id_seq'::regclass)"), autoincrement=True, nullable=False),
    sa.Column('userId', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('photoUrl', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.Column('caption', sa.VARCHAR(length=255), autoincrement=False, nullable=True),
    sa.Column('created_at', postgresql.TIMESTAMP(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], name='posts_userId_fkey'),
    sa.PrimaryKeyConstraint('id', name='posts_pkey'),
    postgresql_ignore_search_path=False
    )
    op.create_table('likes',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('userId', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('postId', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('commentId', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('count', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['postId'], ['posts.id'], name='likes_postId_fkey'),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], name='likes_userId_fkey'),
    sa.PrimaryKeyConstraint('id', name='likes_pkey')
    )
    # ### end Alembic commands ###
